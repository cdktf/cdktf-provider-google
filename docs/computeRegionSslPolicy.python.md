# `computeRegionSslPolicy` Submodule <a name="`computeRegionSslPolicy` Submodule" id="@cdktf/provider-google.computeRegionSslPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionSslPolicy <a name="ComputeRegionSslPolicy" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy google_compute_region_ssl_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_ssl_policy

computeRegionSslPolicy.ComputeRegionSslPolicy(
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
  custom_features: typing.List[str] = None,
  description: str = None,
  id: str = None,
  min_tls_version: str = None,
  profile: str = None,
  project: str = None,
  region: str = None,
  timeouts: ComputeRegionSslPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.customFeatures">custom_features</a></code> | <code>typing.List[str]</code> | A list of features enabled when the selected profile is CUSTOM. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#id ComputeRegionSslPolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.minTlsVersion">min_tls_version</a></code> | <code>str</code> | The minimum version of SSL protocol that can be used by the clients to establish a connection with the load balancer. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.profile">profile</a></code> | <code>str</code> | Profile specifies the set of SSL features that can be used by the load balancer when negotiating SSL with clients. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#project ComputeRegionSslPolicy#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | The region where the regional SSL policy resides. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#name ComputeRegionSslPolicy#name}

---

##### `custom_features`<sup>Optional</sup> <a name="custom_features" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.customFeatures"></a>

- *Type:* typing.List[str]

A list of features enabled when the selected profile is CUSTOM.

The
method returns the set of features that can be specified in this
list. This field must be empty if the profile is not CUSTOM.

See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for which ciphers are available to use. **Note**: this argument
*must* be present when using the 'CUSTOM' profile. This argument
*must not* be present when using any other profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#custom_features ComputeRegionSslPolicy#custom_features}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#description ComputeRegionSslPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#id ComputeRegionSslPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.minTlsVersion"></a>

- *Type:* str

The minimum version of SSL protocol that can be used by the clients to establish a connection with the load balancer.

Default value: "TLS_1_0" Possible values: ["TLS_1_0", "TLS_1_1", "TLS_1_2"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#min_tls_version ComputeRegionSslPolicy#min_tls_version}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.profile"></a>

- *Type:* str

Profile specifies the set of SSL features that can be used by the load balancer when negotiating SSL with clients.

If using 'CUSTOM',
the set of SSL features to enable must be specified in the
'customFeatures' field.

See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for information on what cipher suites each profile provides. If
'CUSTOM' is used, the 'custom_features' attribute **must be set**. Default value: "COMPATIBLE" Possible values: ["COMPATIBLE", "MODERN", "RESTRICTED", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#profile ComputeRegionSslPolicy#profile}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#project ComputeRegionSslPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.region"></a>

- *Type:* str

The region where the regional SSL policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#region ComputeRegionSslPolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#timeouts ComputeRegionSslPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetCustomFeatures">reset_custom_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetMinTlsVersion">reset_min_tls_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#create ComputeRegionSslPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#delete ComputeRegionSslPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#update ComputeRegionSslPolicy#update}.

---

##### `reset_custom_features` <a name="reset_custom_features" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetCustomFeatures"></a>

```python
def reset_custom_features() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_min_tls_version` <a name="reset_min_tls_version" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetMinTlsVersion"></a>

```python
def reset_min_tls_version() -> None
```

##### `reset_profile` <a name="reset_profile" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeRegionSslPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_region_ssl_policy

computeRegionSslPolicy.ComputeRegionSslPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_region_ssl_policy

computeRegionSslPolicy.ComputeRegionSslPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_region_ssl_policy

computeRegionSslPolicy.ComputeRegionSslPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_region_ssl_policy

computeRegionSslPolicy.ComputeRegionSslPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeRegionSslPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeRegionSslPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeRegionSslPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionSslPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.enabledFeatures">enabled_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference">ComputeRegionSslPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.customFeaturesInput">custom_features_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.minTlsVersionInput">min_tls_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.customFeatures">custom_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `enabled_features`<sup>Required</sup> <a name="enabled_features" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.enabledFeatures"></a>

```python
enabled_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.timeouts"></a>

```python
timeouts: ComputeRegionSslPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference">ComputeRegionSslPolicyTimeoutsOutputReference</a>

---

##### `custom_features_input`<sup>Optional</sup> <a name="custom_features_input" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.customFeaturesInput"></a>

```python
custom_features_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `min_tls_version_input`<sup>Optional</sup> <a name="min_tls_version_input" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.minTlsVersionInput"></a>

```python
min_tls_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeRegionSslPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a>]

---

##### `custom_features`<sup>Required</sup> <a name="custom_features" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.customFeatures"></a>

```python
custom_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `min_tls_version`<sup>Required</sup> <a name="min_tls_version" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionSslPolicyConfig <a name="ComputeRegionSslPolicyConfig" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_ssl_policy

computeRegionSslPolicy.ComputeRegionSslPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  custom_features: typing.List[str] = None,
  description: str = None,
  id: str = None,
  min_tls_version: str = None,
  profile: str = None,
  project: str = None,
  region: str = None,
  timeouts: ComputeRegionSslPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.customFeatures">custom_features</a></code> | <code>typing.List[str]</code> | A list of features enabled when the selected profile is CUSTOM. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#id ComputeRegionSslPolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | The minimum version of SSL protocol that can be used by the clients to establish a connection with the load balancer. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.profile">profile</a></code> | <code>str</code> | Profile specifies the set of SSL features that can be used by the load balancer when negotiating SSL with clients. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#project ComputeRegionSslPolicy#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.region">region</a></code> | <code>str</code> | The region where the regional SSL policy resides. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#name ComputeRegionSslPolicy#name}

---

##### `custom_features`<sup>Optional</sup> <a name="custom_features" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.customFeatures"></a>

```python
custom_features: typing.List[str]
```

- *Type:* typing.List[str]

A list of features enabled when the selected profile is CUSTOM.

The
method returns the set of features that can be specified in this
list. This field must be empty if the profile is not CUSTOM.

See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for which ciphers are available to use. **Note**: this argument
*must* be present when using the 'CUSTOM' profile. This argument
*must not* be present when using any other profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#custom_features ComputeRegionSslPolicy#custom_features}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#description ComputeRegionSslPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#id ComputeRegionSslPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

The minimum version of SSL protocol that can be used by the clients to establish a connection with the load balancer.

Default value: "TLS_1_0" Possible values: ["TLS_1_0", "TLS_1_1", "TLS_1_2"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#min_tls_version ComputeRegionSslPolicy#min_tls_version}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.profile"></a>

```python
profile: str
```

- *Type:* str

Profile specifies the set of SSL features that can be used by the load balancer when negotiating SSL with clients.

If using 'CUSTOM',
the set of SSL features to enable must be specified in the
'customFeatures' field.

See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for information on what cipher suites each profile provides. If
'CUSTOM' is used, the 'custom_features' attribute **must be set**. Default value: "COMPATIBLE" Possible values: ["COMPATIBLE", "MODERN", "RESTRICTED", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#profile ComputeRegionSslPolicy#profile}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#project ComputeRegionSslPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region where the regional SSL policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#region ComputeRegionSslPolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.timeouts"></a>

```python
timeouts: ComputeRegionSslPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#timeouts ComputeRegionSslPolicy#timeouts}

---

### ComputeRegionSslPolicyTimeouts <a name="ComputeRegionSslPolicyTimeouts" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_ssl_policy

computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#create ComputeRegionSslPolicy#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#delete ComputeRegionSslPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#update ComputeRegionSslPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#create ComputeRegionSslPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#delete ComputeRegionSslPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_region_ssl_policy#update ComputeRegionSslPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionSslPolicyTimeoutsOutputReference <a name="ComputeRegionSslPolicyTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_ssl_policy

computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionSslPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a>]

---



