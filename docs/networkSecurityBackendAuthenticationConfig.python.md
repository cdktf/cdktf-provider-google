# `networkSecurityBackendAuthenticationConfig` Submodule <a name="`networkSecurityBackendAuthenticationConfig` Submodule" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityBackendAuthenticationConfig <a name="NetworkSecurityBackendAuthenticationConfig" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config google_network_security_backend_authentication_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_backend_authentication_config

networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  client_certificate: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: NetworkSecurityBackendAuthenticationConfigTimeouts = None,
  trust_config: str = None,
  well_known_roots: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the BackendAuthenticationConfig resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.clientCertificate">client_certificate</a></code> | <code>str</code> | Reference to a Certificate resource from the certificatemanager.googleapis.com namespace. Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#id NetworkSecurityBackendAuthenticationConfig#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the BackendAuthenticationConfig resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the backend authentication config. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#project NetworkSecurityBackendAuthenticationConfig#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts">NetworkSecurityBackendAuthenticationConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.trustConfig">trust_config</a></code> | <code>str</code> | Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.wellKnownRoots">well_known_roots</a></code> | <code>str</code> | Well known roots to use for server certificate validation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.name"></a>

- *Type:* str

Name of the BackendAuthenticationConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#name NetworkSecurityBackendAuthenticationConfig#name}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.clientCertificate"></a>

- *Type:* str

Reference to a Certificate resource from the certificatemanager.googleapis.com namespace. Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#client_certificate NetworkSecurityBackendAuthenticationConfig#client_certificate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#description NetworkSecurityBackendAuthenticationConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#id NetworkSecurityBackendAuthenticationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the BackendAuthenticationConfig resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#labels NetworkSecurityBackendAuthenticationConfig#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.location"></a>

- *Type:* str

The location of the backend authentication config. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#location NetworkSecurityBackendAuthenticationConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#project NetworkSecurityBackendAuthenticationConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts">NetworkSecurityBackendAuthenticationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#timeouts NetworkSecurityBackendAuthenticationConfig#timeouts}

---

##### `trust_config`<sup>Optional</sup> <a name="trust_config" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.trustConfig"></a>

- *Type:* str

Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#trust_config NetworkSecurityBackendAuthenticationConfig#trust_config}

---

##### `well_known_roots`<sup>Optional</sup> <a name="well_known_roots" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.Initializer.parameter.wellKnownRoots"></a>

- *Type:* str

Well known roots to use for server certificate validation.

If set to NONE, the BackendService will only validate server certificates against roots specified in TrustConfig.
If set to PUBLIC_ROOTS, the BackendService uses a set of well-known public roots, in addition to any roots specified in the trustConfig field, when validating the server certificates presented by the backend.
Validation with these roots is only considered when the TlsSettings.sni field in the BackendService is set. The well-known roots are a set of root CAs managed by Google. CAs in this set can be added or removed without notice. Possible values: ["NONE", "PUBLIC_ROOTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#well_known_roots NetworkSecurityBackendAuthenticationConfig#well_known_roots}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetTrustConfig">reset_trust_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetWellKnownRoots">reset_well_known_roots</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#create NetworkSecurityBackendAuthenticationConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#delete NetworkSecurityBackendAuthenticationConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#update NetworkSecurityBackendAuthenticationConfig#update}.

---

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_trust_config` <a name="reset_trust_config" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetTrustConfig"></a>

```python
def reset_trust_config() -> None
```

##### `reset_well_known_roots` <a name="reset_well_known_roots" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.resetWellKnownRoots"></a>

```python
def reset_well_known_roots() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkSecurityBackendAuthenticationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_security_backend_authentication_config

networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_security_backend_authentication_config

networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_security_backend_authentication_config

networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_security_backend_authentication_config

networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkSecurityBackendAuthenticationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkSecurityBackendAuthenticationConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkSecurityBackendAuthenticationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityBackendAuthenticationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference">NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.clientCertificateInput">client_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts">NetworkSecurityBackendAuthenticationConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.trustConfigInput">trust_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.wellKnownRootsInput">well_known_roots_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.trustConfig">trust_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.wellKnownRoots">well_known_roots</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.timeouts"></a>

```python
timeouts: NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference">NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.clientCertificateInput"></a>

```python
client_certificate_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkSecurityBackendAuthenticationConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts">NetworkSecurityBackendAuthenticationConfigTimeouts</a>]

---

##### `trust_config_input`<sup>Optional</sup> <a name="trust_config_input" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.trustConfigInput"></a>

```python
trust_config_input: str
```

- *Type:* str

---

##### `well_known_roots_input`<sup>Optional</sup> <a name="well_known_roots_input" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.wellKnownRootsInput"></a>

```python
well_known_roots_input: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `trust_config`<sup>Required</sup> <a name="trust_config" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.trustConfig"></a>

```python
trust_config: str
```

- *Type:* str

---

##### `well_known_roots`<sup>Required</sup> <a name="well_known_roots" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.wellKnownRoots"></a>

```python
well_known_roots: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityBackendAuthenticationConfigConfig <a name="NetworkSecurityBackendAuthenticationConfigConfig" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_backend_authentication_config

networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  client_certificate: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: NetworkSecurityBackendAuthenticationConfigTimeouts = None,
  trust_config: str = None,
  well_known_roots: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.name">name</a></code> | <code>str</code> | Name of the BackendAuthenticationConfig resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.clientCertificate">client_certificate</a></code> | <code>str</code> | Reference to a Certificate resource from the certificatemanager.googleapis.com namespace. Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#id NetworkSecurityBackendAuthenticationConfig#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the BackendAuthenticationConfig resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.location">location</a></code> | <code>str</code> | The location of the backend authentication config. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#project NetworkSecurityBackendAuthenticationConfig#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts">NetworkSecurityBackendAuthenticationConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.trustConfig">trust_config</a></code> | <code>str</code> | Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.wellKnownRoots">well_known_roots</a></code> | <code>str</code> | Well known roots to use for server certificate validation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the BackendAuthenticationConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#name NetworkSecurityBackendAuthenticationConfig#name}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

Reference to a Certificate resource from the certificatemanager.googleapis.com namespace. Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#client_certificate NetworkSecurityBackendAuthenticationConfig#client_certificate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#description NetworkSecurityBackendAuthenticationConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#id NetworkSecurityBackendAuthenticationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the BackendAuthenticationConfig resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#labels NetworkSecurityBackendAuthenticationConfig#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the backend authentication config. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#location NetworkSecurityBackendAuthenticationConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#project NetworkSecurityBackendAuthenticationConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.timeouts"></a>

```python
timeouts: NetworkSecurityBackendAuthenticationConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts">NetworkSecurityBackendAuthenticationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#timeouts NetworkSecurityBackendAuthenticationConfig#timeouts}

---

##### `trust_config`<sup>Optional</sup> <a name="trust_config" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.trustConfig"></a>

```python
trust_config: str
```

- *Type:* str

Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace. A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#trust_config NetworkSecurityBackendAuthenticationConfig#trust_config}

---

##### `well_known_roots`<sup>Optional</sup> <a name="well_known_roots" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigConfig.property.wellKnownRoots"></a>

```python
well_known_roots: str
```

- *Type:* str

Well known roots to use for server certificate validation.

If set to NONE, the BackendService will only validate server certificates against roots specified in TrustConfig.
If set to PUBLIC_ROOTS, the BackendService uses a set of well-known public roots, in addition to any roots specified in the trustConfig field, when validating the server certificates presented by the backend.
Validation with these roots is only considered when the TlsSettings.sni field in the BackendService is set. The well-known roots are a set of root CAs managed by Google. CAs in this set can be added or removed without notice. Possible values: ["NONE", "PUBLIC_ROOTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#well_known_roots NetworkSecurityBackendAuthenticationConfig#well_known_roots}

---

### NetworkSecurityBackendAuthenticationConfigTimeouts <a name="NetworkSecurityBackendAuthenticationConfigTimeouts" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_backend_authentication_config

networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#create NetworkSecurityBackendAuthenticationConfig#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#delete NetworkSecurityBackendAuthenticationConfig#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#update NetworkSecurityBackendAuthenticationConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#create NetworkSecurityBackendAuthenticationConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#delete NetworkSecurityBackendAuthenticationConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#update NetworkSecurityBackendAuthenticationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference <a name="NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_backend_authentication_config

networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts">NetworkSecurityBackendAuthenticationConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkSecurityBackendAuthenticationConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkSecurityBackendAuthenticationConfig.NetworkSecurityBackendAuthenticationConfigTimeouts">NetworkSecurityBackendAuthenticationConfigTimeouts</a>]

---



