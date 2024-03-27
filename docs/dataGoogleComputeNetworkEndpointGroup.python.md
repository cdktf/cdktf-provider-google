# `dataGoogleComputeNetworkEndpointGroup` Submodule <a name="`dataGoogleComputeNetworkEndpointGroup` Submodule" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeNetworkEndpointGroup <a name="DataGoogleComputeNetworkEndpointGroup" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group google_compute_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_network_endpoint_group

dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None,
  project: str = None,
  self_link: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#id DataGoogleComputeNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#project DataGoogleComputeNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.selfLink">self_link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#self_link DataGoogleComputeNetworkEndpointGroup#self_link}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Zone where the network endpoint group is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#id DataGoogleComputeNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#name DataGoogleComputeNetworkEndpointGroup#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#project DataGoogleComputeNetworkEndpointGroup#project}.

---

##### `self_link`<sup>Optional</sup> <a name="self_link" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.selfLink"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#self_link DataGoogleComputeNetworkEndpointGroup#self_link}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.Initializer.parameter.zone"></a>

- *Type:* str

Zone where the network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#zone DataGoogleComputeNetworkEndpointGroup#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetSelfLink">reset_self_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_self_link` <a name="reset_self_link" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetSelfLink"></a>

```python
def reset_self_link() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleComputeNetworkEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_network_endpoint_group

dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_network_endpoint_group

dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_network_endpoint_group

dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_network_endpoint_group

dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleComputeNetworkEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeNetworkEndpointGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.defaultPort">default_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.selfLinkInput">self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `default_port`<sup>Required</sup> <a name="default_port" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.defaultPort"></a>

```python
default_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_endpoint_type`<sup>Required</sup> <a name="network_endpoint_type" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.networkEndpointType"></a>

```python
network_endpoint_type: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `self_link_input`<sup>Optional</sup> <a name="self_link_input" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.selfLinkInput"></a>

```python
self_link_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeNetworkEndpointGroupConfig <a name="DataGoogleComputeNetworkEndpointGroupConfig" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_network_endpoint_group

dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None,
  project: str = None,
  self_link: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#id DataGoogleComputeNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#project DataGoogleComputeNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.selfLink">self_link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#self_link DataGoogleComputeNetworkEndpointGroup#self_link}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.zone">zone</a></code> | <code>str</code> | Zone where the network endpoint group is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#id DataGoogleComputeNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#name DataGoogleComputeNetworkEndpointGroup#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#project DataGoogleComputeNetworkEndpointGroup#project}.

---

##### `self_link`<sup>Optional</sup> <a name="self_link" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#self_link DataGoogleComputeNetworkEndpointGroup#self_link}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataGoogleComputeNetworkEndpointGroup.DataGoogleComputeNetworkEndpointGroupConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Zone where the network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/data-sources/compute_network_endpoint_group#zone DataGoogleComputeNetworkEndpointGroup#zone}

---



