# `dataGoogleComputeRegionInstanceTemplate` Submodule <a name="`dataGoogleComputeRegionInstanceTemplate` Submodule" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionInstanceTemplate <a name="DataGoogleComputeRegionInstanceTemplate" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template google_compute_region_instance_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str = None,
  id: str = None,
  most_recent: typing.Union[bool, IResolvable] = None,
  name: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#filter DataGoogleComputeRegionInstanceTemplate#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#id DataGoogleComputeRegionInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.mostRecent">most_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#most_recent DataGoogleComputeRegionInstanceTemplate#most_recent}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.region">region</a></code> | <code>str</code> | The region in which the instance template is located. If it is not provided, the provider region is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#filter DataGoogleComputeRegionInstanceTemplate#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#id DataGoogleComputeRegionInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `most_recent`<sup>Optional</sup> <a name="most_recent" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.mostRecent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#most_recent DataGoogleComputeRegionInstanceTemplate#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.name"></a>

- *Type:* str

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#name DataGoogleComputeRegionInstanceTemplate#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#project DataGoogleComputeRegionInstanceTemplate#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.Initializer.parameter.region"></a>

- *Type:* str

The region in which the instance template is located. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#region DataGoogleComputeRegionInstanceTemplate#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetMostRecent">reset_most_recent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_most_recent` <a name="reset_most_recent" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetMostRecent"></a>

```python
def reset_most_recent() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleComputeRegionInstanceTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleComputeRegionInstanceTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleComputeRegionInstanceTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleComputeRegionInstanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRegionInstanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.advancedMachineFeatures">advanced_machine_features</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList">DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.canIpForward">can_ip_forward</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.confidentialInstanceConfig">confidential_instance_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList">DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList">DataGoogleComputeRegionInstanceTemplateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.guestAccelerator">guest_accelerator</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList">DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.instanceDescription">instance_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.keyRevocationActionType">key_revocation_action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.metadataFingerprint">metadata_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.metadataStartupScript">metadata_startup_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.minCpuPlatform">min_cpu_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.networkInterface">network_interface</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.networkPerformanceConfig">network_performance_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList">DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList">DataGoogleComputeRegionInstanceTemplateReservationAffinityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.resourceManagerTags">resource_manager_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList">DataGoogleComputeRegionInstanceTemplateSchedulingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.serviceAccount">service_account</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList">DataGoogleComputeRegionInstanceTemplateServiceAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList">DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.tagsFingerprint">tags_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.mostRecentInput">most_recent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.mostRecent">most_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `advanced_machine_features`<sup>Required</sup> <a name="advanced_machine_features" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.advancedMachineFeatures"></a>

```python
advanced_machine_features: DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList">DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList</a>

---

##### `can_ip_forward`<sup>Required</sup> <a name="can_ip_forward" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.canIpForward"></a>

```python
can_ip_forward: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `confidential_instance_config`<sup>Required</sup> <a name="confidential_instance_config" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.confidentialInstanceConfig"></a>

```python
confidential_instance_config: DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList">DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.disk"></a>

```python
disk: DataGoogleComputeRegionInstanceTemplateDiskList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList">DataGoogleComputeRegionInstanceTemplateDiskList</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `guest_accelerator`<sup>Required</sup> <a name="guest_accelerator" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.guestAccelerator"></a>

```python
guest_accelerator: DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList">DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList</a>

---

##### `instance_description`<sup>Required</sup> <a name="instance_description" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.instanceDescription"></a>

```python
instance_description: str
```

- *Type:* str

---

##### `key_revocation_action_type`<sup>Required</sup> <a name="key_revocation_action_type" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.keyRevocationActionType"></a>

```python
key_revocation_action_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `metadata_fingerprint`<sup>Required</sup> <a name="metadata_fingerprint" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.metadataFingerprint"></a>

```python
metadata_fingerprint: str
```

- *Type:* str

---

##### `metadata_startup_script`<sup>Required</sup> <a name="metadata_startup_script" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.metadataStartupScript"></a>

```python
metadata_startup_script: str
```

- *Type:* str

---

##### `min_cpu_platform`<sup>Required</sup> <a name="min_cpu_platform" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.minCpuPlatform"></a>

```python
min_cpu_platform: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `network_interface`<sup>Required</sup> <a name="network_interface" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.networkInterface"></a>

```python
network_interface: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList</a>

---

##### `network_performance_config`<sup>Required</sup> <a name="network_performance_config" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.networkPerformanceConfig"></a>

```python
network_performance_config: DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList">DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList</a>

---

##### `reservation_affinity`<sup>Required</sup> <a name="reservation_affinity" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.reservationAffinity"></a>

```python
reservation_affinity: DataGoogleComputeRegionInstanceTemplateReservationAffinityList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList">DataGoogleComputeRegionInstanceTemplateReservationAffinityList</a>

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.resourceManagerTags"></a>

```python
resource_manager_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `resource_policies`<sup>Required</sup> <a name="resource_policies" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.scheduling"></a>

```python
scheduling: DataGoogleComputeRegionInstanceTemplateSchedulingList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList">DataGoogleComputeRegionInstanceTemplateSchedulingList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.serviceAccount"></a>

```python
service_account: DataGoogleComputeRegionInstanceTemplateServiceAccountList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList">DataGoogleComputeRegionInstanceTemplateServiceAccountList</a>

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList">DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_fingerprint`<sup>Required</sup> <a name="tags_fingerprint" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.tagsFingerprint"></a>

```python
tags_fingerprint: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `most_recent_input`<sup>Optional</sup> <a name="most_recent_input" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.mostRecentInput"></a>

```python
most_recent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `most_recent`<sup>Required</sup> <a name="most_recent" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.mostRecent"></a>

```python
most_recent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures <a name="DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures()
```


### DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig <a name="DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig()
```


### DataGoogleComputeRegionInstanceTemplateConfig <a name="DataGoogleComputeRegionInstanceTemplateConfig" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str = None,
  id: str = None,
  most_recent: typing.Union[bool, IResolvable] = None,
  name: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#filter DataGoogleComputeRegionInstanceTemplate#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#id DataGoogleComputeRegionInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.mostRecent">most_recent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#most_recent DataGoogleComputeRegionInstanceTemplate#most_recent}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.name">name</a></code> | <code>str</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.region">region</a></code> | <code>str</code> | The region in which the instance template is located. If it is not provided, the provider region is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#filter DataGoogleComputeRegionInstanceTemplate#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#id DataGoogleComputeRegionInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `most_recent`<sup>Optional</sup> <a name="most_recent" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.mostRecent"></a>

```python
most_recent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#most_recent DataGoogleComputeRegionInstanceTemplate#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#name DataGoogleComputeRegionInstanceTemplate#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#project DataGoogleComputeRegionInstanceTemplate#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region in which the instance template is located. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/data-sources/compute_region_instance_template#region DataGoogleComputeRegionInstanceTemplate#region}

---

### DataGoogleComputeRegionInstanceTemplateDisk <a name="DataGoogleComputeRegionInstanceTemplateDisk" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDisk.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDisk()
```


### DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey <a name="DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey()
```


### DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey <a name="DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey()
```


### DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey <a name="DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey()
```


### DataGoogleComputeRegionInstanceTemplateGuestAccelerator <a name="DataGoogleComputeRegionInstanceTemplateGuestAccelerator" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAccelerator.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAccelerator()
```


### DataGoogleComputeRegionInstanceTemplateNetworkInterface <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterface" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterface()
```


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig()
```


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange()
```


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig()
```


### DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig <a name="DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig()
```


### DataGoogleComputeRegionInstanceTemplateReservationAffinity <a name="DataGoogleComputeRegionInstanceTemplateReservationAffinity" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinity.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinity()
```


### DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation <a name="DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation()
```


### DataGoogleComputeRegionInstanceTemplateScheduling <a name="DataGoogleComputeRegionInstanceTemplateScheduling" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateScheduling.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateScheduling()
```


### DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout <a name="DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout()
```


### DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration <a name="DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration()
```


### DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities <a name="DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities()
```


### DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction <a name="DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction()
```


### DataGoogleComputeRegionInstanceTemplateServiceAccount <a name="DataGoogleComputeRegionInstanceTemplateServiceAccount" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccount()
```


### DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig <a name="DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList <a name="DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference <a name="DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">enable_nested_virtualization</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode">turbo_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">visible_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_nested_virtualization`<sup>Required</sup> <a name="enable_nested_virtualization" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```python
enable_nested_virtualization: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `turbo_mode`<sup>Required</sup> <a name="turbo_mode" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```python
turbo_mode: str
```

- *Type:* str

---

##### `visible_core_count`<sup>Required</sup> <a name="visible_core_count" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```python
visible_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">DataGoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

---


### DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList <a name="DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference <a name="DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">confidential_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidential_instance_type`<sup>Required</sup> <a name="confidential_instance_type" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```python
confidential_instance_type: str
```

- *Type:* str

---

##### `enable_confidential_compute`<sup>Required</sup> <a name="enable_confidential_compute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```python
enable_confidential_compute: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">DataGoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

---


### DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList <a name="DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference <a name="DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

---


### DataGoogleComputeRegionInstanceTemplateDiskList <a name="DataGoogleComputeRegionInstanceTemplateDiskList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateDiskOutputReference <a name="DataGoogleComputeRegionInstanceTemplateDiskOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.autoDelete">auto_delete</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.boot">boot</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKey">disk_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList">DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskName">disk_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.interface">interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIops">provisioned_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedThroughput">provisioned_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTags">resource_manager_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourcePolicies">resource_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImage">source_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey">source_image_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList">DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey">source_snapshot_encryption_key</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList">DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDisk">DataGoogleComputeRegionInstanceTemplateDisk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_delete`<sup>Required</sup> <a name="auto_delete" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.autoDelete"></a>

```python
auto_delete: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.boot"></a>

```python
boot: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `disk_encryption_key`<sup>Required</sup> <a name="disk_encryption_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKey"></a>

```python
disk_encryption_key: DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList">DataGoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyList</a>

---

##### `disk_name`<sup>Required</sup> <a name="disk_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.interface"></a>

```python
interface: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `provisioned_iops`<sup>Required</sup> <a name="provisioned_iops" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIops"></a>

```python
provisioned_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_throughput`<sup>Required</sup> <a name="provisioned_throughput" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedThroughput"></a>

```python
provisioned_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTags"></a>

```python
resource_manager_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `resource_policies`<sup>Required</sup> <a name="resource_policies" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourcePolicies"></a>

```python
resource_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_image`<sup>Required</sup> <a name="source_image" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImage"></a>

```python
source_image: str
```

- *Type:* str

---

##### `source_image_encryption_key`<sup>Required</sup> <a name="source_image_encryption_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey"></a>

```python
source_image_encryption_key: DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList">DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList</a>

---

##### `source_snapshot`<sup>Required</sup> <a name="source_snapshot" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

---

##### `source_snapshot_encryption_key`<sup>Required</sup> <a name="source_snapshot_encryption_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey"></a>

```python
source_snapshot_encryption_key: DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList">DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateDisk
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDisk">DataGoogleComputeRegionInstanceTemplateDisk</a>

---


### DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList <a name="DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference <a name="DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">DataGoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

---


### DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList <a name="DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference <a name="DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kms_key_self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_self_link`<sup>Required</sup> <a name="kms_key_self_link" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```python
kms_key_self_link: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">DataGoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---


### DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList <a name="DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference <a name="DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAccelerator">DataGoogleComputeRegionInstanceTemplateGuestAccelerator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateGuestAccelerator
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateGuestAccelerator">DataGoogleComputeRegionInstanceTemplateGuestAccelerator</a>

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp">nat_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier">network_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">public_ptr_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nat_ip`<sup>Required</sup> <a name="nat_ip" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```python
nat_ip: str
```

- *Type:* str

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

---

##### `public_ptr_domain_name`<sup>Required</sup> <a name="public_ptr_domain_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```python
public_ptr_domain_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig</a>

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">subnetwork_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `subnetwork_range_name`<sup>Required</sup> <a name="subnetwork_range_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```python
subnetwork_range_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange</a>

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">external_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">external_ipv6_prefix_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">network_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">public_ptr_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_ipv6`<sup>Required</sup> <a name="external_ipv6" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```python
external_ipv6: str
```

- *Type:* str

---

##### `external_ipv6_prefix_length`<sup>Required</sup> <a name="external_ipv6_prefix_length" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```python
external_ipv6_prefix_length: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

---

##### `public_ptr_domain_name`<sup>Required</sup> <a name="public_ptr_domain_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```python
public_ptr_domain_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference <a name="DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange">alias_ip_range</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">internal_ipv6_prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig">ipv6_access_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType">ipv6_access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIp">network_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicType">nic_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCount">queue_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackType">stack_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject">subnetwork_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterface">DataGoogleComputeRegionInstanceTemplateNetworkInterface</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig"></a>

```python
access_config: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList</a>

---

##### `alias_ip_range`<sup>Required</sup> <a name="alias_ip_range" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```python
alias_ip_range: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList</a>

---

##### `internal_ipv6_prefix_length`<sup>Required</sup> <a name="internal_ipv6_prefix_length" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```python
internal_ipv6_prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_access_config`<sup>Required</sup> <a name="ipv6_access_config" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```python
ipv6_access_config: DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList">DataGoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a>

---

##### `ipv6_access_type`<sup>Required</sup> <a name="ipv6_access_type" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```python
ipv6_access_type: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_ip`<sup>Required</sup> <a name="network_ip" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIp"></a>

```python
network_ip: str
```

- *Type:* str

---

##### `nic_type`<sup>Required</sup> <a name="nic_type" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicType"></a>

```python
nic_type: str
```

- *Type:* str

---

##### `queue_count`<sup>Required</sup> <a name="queue_count" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCount"></a>

```python
queue_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_type`<sup>Required</sup> <a name="stack_type" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `subnetwork_project`<sup>Required</sup> <a name="subnetwork_project" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```python
subnetwork_project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateNetworkInterface
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkInterface">DataGoogleComputeRegionInstanceTemplateNetworkInterface</a>

---


### DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList <a name="DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference <a name="DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">total_egress_bandwidth_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `total_egress_bandwidth_tier`<sup>Required</sup> <a name="total_egress_bandwidth_tier" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```python
total_egress_bandwidth_tier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">DataGoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

---


### DataGoogleComputeRegionInstanceTemplateReservationAffinityList <a name="DataGoogleComputeRegionInstanceTemplateReservationAffinityList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference <a name="DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservation">specific_reservation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList">DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinity">DataGoogleComputeRegionInstanceTemplateReservationAffinity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `specific_reservation`<sup>Required</sup> <a name="specific_reservation" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservation"></a>

```python
specific_reservation: DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList">DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinity">DataGoogleComputeRegionInstanceTemplateReservationAffinity</a>

---


### DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList <a name="DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference <a name="DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">DataGoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

---


### DataGoogleComputeRegionInstanceTemplateSchedulingList <a name="DataGoogleComputeRegionInstanceTemplateSchedulingList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList <a name="DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout">DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>

---


### DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList <a name="DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference <a name="DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a>

---


### DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList <a name="DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference <a name="DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities">DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities">DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinities</a>

---


### DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList <a name="DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference <a name="DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">discard_local_ssd</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `discard_local_ssd`<sup>Required</sup> <a name="discard_local_ssd" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```python
discard_local_ssd: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a>

---


### DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference <a name="DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestart">automatic_restart</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction">instance_termination_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout">local_ssd_recovery_timeout</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maxRunDuration">max_run_duration</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList">DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpus">min_node_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinities">node_affinities</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList">DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenance">on_host_maintenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction">on_instance_stop_action</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList">DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptible">preemptible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModel">provisioning_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateScheduling">DataGoogleComputeRegionInstanceTemplateScheduling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic_restart`<sup>Required</sup> <a name="automatic_restart" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestart"></a>

```python
automatic_restart: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `instance_termination_action`<sup>Required</sup> <a name="instance_termination_action" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction"></a>

```python
instance_termination_action: str
```

- *Type:* str

---

##### `local_ssd_recovery_timeout`<sup>Required</sup> <a name="local_ssd_recovery_timeout" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```python
local_ssd_recovery_timeout: DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">DataGoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a>

---

##### `max_run_duration`<sup>Required</sup> <a name="max_run_duration" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maxRunDuration"></a>

```python
max_run_duration: DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList">DataGoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationList</a>

---

##### `min_node_cpus`<sup>Required</sup> <a name="min_node_cpus" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpus"></a>

```python
min_node_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_affinities`<sup>Required</sup> <a name="node_affinities" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinities"></a>

```python
node_affinities: DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList">DataGoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList</a>

---

##### `on_host_maintenance`<sup>Required</sup> <a name="on_host_maintenance" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenance"></a>

```python
on_host_maintenance: str
```

- *Type:* str

---

##### `on_instance_stop_action`<sup>Required</sup> <a name="on_instance_stop_action" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction"></a>

```python
on_instance_stop_action: DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList">DataGoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionList</a>

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptible"></a>

```python
preemptible: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `provisioning_model`<sup>Required</sup> <a name="provisioning_model" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModel"></a>

```python
provisioning_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateScheduling">DataGoogleComputeRegionInstanceTemplateScheduling</a>

---


### DataGoogleComputeRegionInstanceTemplateServiceAccountList <a name="DataGoogleComputeRegionInstanceTemplateServiceAccountList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference <a name="DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccount">DataGoogleComputeRegionInstanceTemplateServiceAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateServiceAccount">DataGoogleComputeRegionInstanceTemplateServiceAccount</a>

---


### DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList <a name="DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference <a name="DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_template

dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm">enable_vtpm</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig">DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_vtpm`<sup>Required</sup> <a name="enable_vtpm" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```python
enable_vtpm: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceTemplate.DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig">DataGoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a>

---



