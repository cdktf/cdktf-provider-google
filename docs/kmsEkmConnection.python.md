# `kmsEkmConnection` Submodule <a name="`kmsEkmConnection` Submodule" id="@cdktf/provider-google.kmsEkmConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsEkmConnection <a name="KmsEkmConnection" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection google_kms_ekm_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection

kmsEkmConnection.KmsEkmConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  service_resolvers: typing.Union[IResolvable, typing.List[KmsEkmConnectionServiceResolvers]],
  crypto_space_path: str = None,
  etag: str = None,
  id: str = None,
  key_management_mode: str = None,
  project: str = None,
  timeouts: KmsEkmConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the EkmConnection. A full list of valid locations can be found by running 'gcloud kms locations list'. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name for the EkmConnection. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.serviceResolvers">service_resolvers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>]]</code> | service_resolvers block. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.cryptoSpacePath">crypto_space_path</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Optional. Etag of the currently stored EkmConnection. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#id KmsEkmConnection#id}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.keyManagementMode">key_management_mode</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#project KmsEkmConnection#project}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.location"></a>

- *Type:* str

The location for the EkmConnection. A full list of valid locations can be found by running 'gcloud kms locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#location KmsEkmConnection#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.name"></a>

- *Type:* str

The resource name for the EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#name KmsEkmConnection#name}

---

##### `service_resolvers`<sup>Required</sup> <a name="service_resolvers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.serviceResolvers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>]]

service_resolvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#service_resolvers KmsEkmConnection#service_resolvers}

---

##### `crypto_space_path`<sup>Optional</sup> <a name="crypto_space_path" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.cryptoSpacePath"></a>

- *Type:* str

Optional.

Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#crypto_space_path KmsEkmConnection#crypto_space_path}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.etag"></a>

- *Type:* str

Optional. Etag of the currently stored EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#etag KmsEkmConnection#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#id KmsEkmConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_management_mode`<sup>Optional</sup> <a name="key_management_mode" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.keyManagementMode"></a>

- *Type:* str

Optional.

Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL Default value: "MANUAL" Possible values: ["MANUAL", "CLOUD_KMS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#key_management_mode KmsEkmConnection#key_management_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#project KmsEkmConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#timeouts KmsEkmConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putServiceResolvers">put_service_resolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetCryptoSpacePath">reset_crypto_space_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetKeyManagementMode">reset_key_management_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_service_resolvers` <a name="put_service_resolvers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putServiceResolvers"></a>

```python
def put_service_resolvers(
  value: typing.Union[IResolvable, typing.List[KmsEkmConnectionServiceResolvers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putServiceResolvers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#create KmsEkmConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#delete KmsEkmConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#update KmsEkmConnection#update}.

---

##### `reset_crypto_space_path` <a name="reset_crypto_space_path" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetCryptoSpacePath"></a>

```python
def reset_crypto_space_path() -> None
```

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_management_mode` <a name="reset_key_management_mode" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetKeyManagementMode"></a>

```python
def reset_key_management_mode() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KmsEkmConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection

kmsEkmConnection.KmsEkmConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection

kmsEkmConnection.KmsEkmConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection

kmsEkmConnection.KmsEkmConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection

kmsEkmConnection.KmsEkmConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KmsEkmConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KmsEkmConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KmsEkmConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsEkmConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.serviceResolvers">service_resolvers</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList">KmsEkmConnectionServiceResolversList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference">KmsEkmConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cryptoSpacePathInput">crypto_space_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.keyManagementModeInput">key_management_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.serviceResolversInput">service_resolvers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cryptoSpacePath">crypto_space_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.keyManagementMode">key_management_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `service_resolvers`<sup>Required</sup> <a name="service_resolvers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.serviceResolvers"></a>

```python
service_resolvers: KmsEkmConnectionServiceResolversList
```

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList">KmsEkmConnectionServiceResolversList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.timeouts"></a>

```python
timeouts: KmsEkmConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference">KmsEkmConnectionTimeoutsOutputReference</a>

---

##### `crypto_space_path_input`<sup>Optional</sup> <a name="crypto_space_path_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cryptoSpacePathInput"></a>

```python
crypto_space_path_input: str
```

- *Type:* str

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_management_mode_input`<sup>Optional</sup> <a name="key_management_mode_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.keyManagementModeInput"></a>

```python
key_management_mode_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_resolvers_input`<sup>Optional</sup> <a name="service_resolvers_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.serviceResolversInput"></a>

```python
service_resolvers_input: typing.Union[IResolvable, typing.List[KmsEkmConnectionServiceResolvers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KmsEkmConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a>]

---

##### `crypto_space_path`<sup>Required</sup> <a name="crypto_space_path" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cryptoSpacePath"></a>

```python
crypto_space_path: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_management_mode`<sup>Required</sup> <a name="key_management_mode" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.keyManagementMode"></a>

```python
key_management_mode: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmsEkmConnectionConfig <a name="KmsEkmConnectionConfig" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection

kmsEkmConnection.KmsEkmConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  service_resolvers: typing.Union[IResolvable, typing.List[KmsEkmConnectionServiceResolvers]],
  crypto_space_path: str = None,
  etag: str = None,
  id: str = None,
  key_management_mode: str = None,
  project: str = None,
  timeouts: KmsEkmConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.location">location</a></code> | <code>str</code> | The location for the EkmConnection. A full list of valid locations can be found by running 'gcloud kms locations list'. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.name">name</a></code> | <code>str</code> | The resource name for the EkmConnection. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.serviceResolvers">service_resolvers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>]]</code> | service_resolvers block. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.cryptoSpacePath">crypto_space_path</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.etag">etag</a></code> | <code>str</code> | Optional. Etag of the currently stored EkmConnection. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#id KmsEkmConnection#id}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.keyManagementMode">key_management_mode</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#project KmsEkmConnection#project}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the EkmConnection. A full list of valid locations can be found by running 'gcloud kms locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#location KmsEkmConnection#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name for the EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#name KmsEkmConnection#name}

---

##### `service_resolvers`<sup>Required</sup> <a name="service_resolvers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.serviceResolvers"></a>

```python
service_resolvers: typing.Union[IResolvable, typing.List[KmsEkmConnectionServiceResolvers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>]]

service_resolvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#service_resolvers KmsEkmConnection#service_resolvers}

---

##### `crypto_space_path`<sup>Optional</sup> <a name="crypto_space_path" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.cryptoSpacePath"></a>

```python
crypto_space_path: str
```

- *Type:* str

Optional.

Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#crypto_space_path KmsEkmConnection#crypto_space_path}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Optional. Etag of the currently stored EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#etag KmsEkmConnection#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#id KmsEkmConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_management_mode`<sup>Optional</sup> <a name="key_management_mode" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.keyManagementMode"></a>

```python
key_management_mode: str
```

- *Type:* str

Optional.

Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL Default value: "MANUAL" Possible values: ["MANUAL", "CLOUD_KMS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#key_management_mode KmsEkmConnection#key_management_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#project KmsEkmConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.timeouts"></a>

```python
timeouts: KmsEkmConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#timeouts KmsEkmConnection#timeouts}

---

### KmsEkmConnectionServiceResolvers <a name="KmsEkmConnectionServiceResolvers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection

kmsEkmConnection.KmsEkmConnectionServiceResolvers(
  hostname: str,
  server_certificates: typing.Union[IResolvable, typing.List[KmsEkmConnectionServiceResolversServerCertificates]],
  service_directory_service: str,
  endpoint_filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.hostname">hostname</a></code> | <code>str</code> | Required. The hostname of the EKM replica used at TLS and HTTP layers. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.serverCertificates">server_certificates</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>]]</code> | server_certificates block. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.serviceDirectoryService">service_directory_service</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.endpointFilter">endpoint_filter</a></code> | <code>str</code> | Optional. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Required. The hostname of the EKM replica used at TLS and HTTP layers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#hostname KmsEkmConnection#hostname}

---

##### `server_certificates`<sup>Required</sup> <a name="server_certificates" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.serverCertificates"></a>

```python
server_certificates: typing.Union[IResolvable, typing.List[KmsEkmConnectionServiceResolversServerCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>]]

server_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#server_certificates KmsEkmConnection#server_certificates}

---

##### `service_directory_service`<sup>Required</sup> <a name="service_directory_service" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.serviceDirectoryService"></a>

```python
service_directory_service: str
```

- *Type:* str

Required.

The resource name of the Service Directory service pointing to an EKM replica, in the format projects/* /locations/* /namespaces/* /services/*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#service_directory_service KmsEkmConnection#service_directory_service}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `endpoint_filter`<sup>Optional</sup> <a name="endpoint_filter" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.endpointFilter"></a>

```python
endpoint_filter: str
```

- *Type:* str

Optional.

The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered. An endpoint will be chosen arbitrarily from the filtered list for each request. For endpoint filter syntax and examples, see https://cloud.google.com/service-directory/docs/reference/rpc/google.cloud.servicedirectory.v1#resolveservicerequest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#endpoint_filter KmsEkmConnection#endpoint_filter}

---

### KmsEkmConnectionServiceResolversServerCertificates <a name="KmsEkmConnectionServiceResolversServerCertificates" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection

kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates(
  raw_der: str,
  subject_alternative_dns_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates.property.rawDer">raw_der</a></code> | <code>str</code> | Required. The raw certificate bytes in DER format. A base64-encoded string. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates.property.subjectAlternativeDnsNames">subject_alternative_dns_names</a></code> | <code>typing.List[str]</code> | Output only. The subject Alternative DNS names. Only present if parsed is true. |

---

##### `raw_der`<sup>Required</sup> <a name="raw_der" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates.property.rawDer"></a>

```python
raw_der: str
```

- *Type:* str

Required. The raw certificate bytes in DER format. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#raw_der KmsEkmConnection#raw_der}

---

##### `subject_alternative_dns_names`<sup>Optional</sup> <a name="subject_alternative_dns_names" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates.property.subjectAlternativeDnsNames"></a>

```python
subject_alternative_dns_names: typing.List[str]
```

- *Type:* typing.List[str]

Output only. The subject Alternative DNS names. Only present if parsed is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#subject_alternative_dns_names KmsEkmConnection#subject_alternative_dns_names}

---

### KmsEkmConnectionTimeouts <a name="KmsEkmConnectionTimeouts" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection

kmsEkmConnection.KmsEkmConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#create KmsEkmConnection#create}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#delete KmsEkmConnection#delete}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#update KmsEkmConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#create KmsEkmConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#delete KmsEkmConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/kms_ekm_connection#update KmsEkmConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsEkmConnectionServiceResolversList <a name="KmsEkmConnectionServiceResolversList" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection

kmsEkmConnection.KmsEkmConnectionServiceResolversList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KmsEkmConnectionServiceResolversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KmsEkmConnectionServiceResolvers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>]]

---


### KmsEkmConnectionServiceResolversOutputReference <a name="KmsEkmConnectionServiceResolversOutputReference" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection

kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.putServerCertificates">put_server_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.resetEndpointFilter">reset_endpoint_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_server_certificates` <a name="put_server_certificates" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.putServerCertificates"></a>

```python
def put_server_certificates(
  value: typing.Union[IResolvable, typing.List[KmsEkmConnectionServiceResolversServerCertificates]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.putServerCertificates.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>]]

---

##### `reset_endpoint_filter` <a name="reset_endpoint_filter" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.resetEndpointFilter"></a>

```python
def reset_endpoint_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serverCertificates">server_certificates</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList">KmsEkmConnectionServiceResolversServerCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.endpointFilterInput">endpoint_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serverCertificatesInput">server_certificates_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryServiceInput">service_directory_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.endpointFilter">endpoint_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryService">service_directory_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `server_certificates`<sup>Required</sup> <a name="server_certificates" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serverCertificates"></a>

```python
server_certificates: KmsEkmConnectionServiceResolversServerCertificatesList
```

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList">KmsEkmConnectionServiceResolversServerCertificatesList</a>

---

##### `endpoint_filter_input`<sup>Optional</sup> <a name="endpoint_filter_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.endpointFilterInput"></a>

```python
endpoint_filter_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `server_certificates_input`<sup>Optional</sup> <a name="server_certificates_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serverCertificatesInput"></a>

```python
server_certificates_input: typing.Union[IResolvable, typing.List[KmsEkmConnectionServiceResolversServerCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>]]

---

##### `service_directory_service_input`<sup>Optional</sup> <a name="service_directory_service_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryServiceInput"></a>

```python
service_directory_service_input: str
```

- *Type:* str

---

##### `endpoint_filter`<sup>Required</sup> <a name="endpoint_filter" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.endpointFilter"></a>

```python
endpoint_filter: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `service_directory_service`<sup>Required</sup> <a name="service_directory_service" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryService"></a>

```python
service_directory_service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KmsEkmConnectionServiceResolvers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>]

---


### KmsEkmConnectionServiceResolversServerCertificatesList <a name="KmsEkmConnectionServiceResolversServerCertificatesList" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection

kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KmsEkmConnectionServiceResolversServerCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KmsEkmConnectionServiceResolversServerCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>]]

---


### KmsEkmConnectionServiceResolversServerCertificatesOutputReference <a name="KmsEkmConnectionServiceResolversServerCertificatesOutputReference" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection

kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.resetSubjectAlternativeDnsNames">reset_subject_alternative_dns_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subject_alternative_dns_names` <a name="reset_subject_alternative_dns_names" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.resetSubjectAlternativeDnsNames"></a>

```python
def reset_subject_alternative_dns_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notAfterTime">not_after_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notBeforeTime">not_before_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.parsed">parsed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.sha256Fingerprint">sha256_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDerInput">raw_der_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNamesInput">subject_alternative_dns_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDer">raw_der</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNames">subject_alternative_dns_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `not_after_time`<sup>Required</sup> <a name="not_after_time" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notAfterTime"></a>

```python
not_after_time: str
```

- *Type:* str

---

##### `not_before_time`<sup>Required</sup> <a name="not_before_time" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notBeforeTime"></a>

```python
not_before_time: str
```

- *Type:* str

---

##### `parsed`<sup>Required</sup> <a name="parsed" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.parsed"></a>

```python
parsed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `sha256_fingerprint`<sup>Required</sup> <a name="sha256_fingerprint" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.sha256Fingerprint"></a>

```python
sha256_fingerprint: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `raw_der_input`<sup>Optional</sup> <a name="raw_der_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDerInput"></a>

```python
raw_der_input: str
```

- *Type:* str

---

##### `subject_alternative_dns_names_input`<sup>Optional</sup> <a name="subject_alternative_dns_names_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNamesInput"></a>

```python
subject_alternative_dns_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `raw_der`<sup>Required</sup> <a name="raw_der" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDer"></a>

```python
raw_der: str
```

- *Type:* str

---

##### `subject_alternative_dns_names`<sup>Required</sup> <a name="subject_alternative_dns_names" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNames"></a>

```python
subject_alternative_dns_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KmsEkmConnectionServiceResolversServerCertificates]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>]

---


### KmsEkmConnectionTimeoutsOutputReference <a name="KmsEkmConnectionTimeoutsOutputReference" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection

kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KmsEkmConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a>]

---



