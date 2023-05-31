# `data_google_compute_region_instance_group`

Refer to the Terraform Registory for docs: [`data_google_compute_region_instance_group`](https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group).

# `dataGoogleComputeRegionInstanceGroup` Submodule <a name="`dataGoogleComputeRegionInstanceGroup` Submodule" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionInstanceGroup <a name="DataGoogleComputeRegionInstanceGroup" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group google_compute_region_instance_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_group

dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup(
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
  region: str = None,
  self_link: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#id DataGoogleComputeRegionInstanceGroup#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#name DataGoogleComputeRegionInstanceGroup#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#project DataGoogleComputeRegionInstanceGroup#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#region DataGoogleComputeRegionInstanceGroup#region}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.selfLink">self_link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#self_link DataGoogleComputeRegionInstanceGroup#self_link}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#id DataGoogleComputeRegionInstanceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#name DataGoogleComputeRegionInstanceGroup#name}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#project DataGoogleComputeRegionInstanceGroup#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#region DataGoogleComputeRegionInstanceGroup#region}.

---

##### `self_link`<sup>Optional</sup> <a name="self_link" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.Initializer.parameter.selfLink"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#self_link DataGoogleComputeRegionInstanceGroup#self_link}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetSelfLink">reset_self_link</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_self_link` <a name="reset_self_link" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.resetSelfLink"></a>

```python
def reset_self_link() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_group

dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_group

dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_group

dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList">DataGoogleComputeRegionInstanceGroupInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.selfLinkInput">self_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.instances"></a>

```python
instances: DataGoogleComputeRegionInstanceGroupInstancesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList">DataGoogleComputeRegionInstanceGroupInstancesList</a>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `self_link_input`<sup>Optional</sup> <a name="self_link_input" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.selfLinkInput"></a>

```python
self_link_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionInstanceGroupConfig <a name="DataGoogleComputeRegionInstanceGroupConfig" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_group

dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig(
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
  region: str = None,
  self_link: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#id DataGoogleComputeRegionInstanceGroup#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#name DataGoogleComputeRegionInstanceGroup#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#project DataGoogleComputeRegionInstanceGroup#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#region DataGoogleComputeRegionInstanceGroup#region}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.selfLink">self_link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#self_link DataGoogleComputeRegionInstanceGroup#self_link}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#id DataGoogleComputeRegionInstanceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#name DataGoogleComputeRegionInstanceGroup#name}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#project DataGoogleComputeRegionInstanceGroup#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#region DataGoogleComputeRegionInstanceGroup#region}.

---

##### `self_link`<sup>Optional</sup> <a name="self_link" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupConfig.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/data-sources/compute_region_instance_group#self_link DataGoogleComputeRegionInstanceGroup#self_link}.

---

### DataGoogleComputeRegionInstanceGroupInstances <a name="DataGoogleComputeRegionInstanceGroupInstances" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstances.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_group

dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstances()
```


### DataGoogleComputeRegionInstanceGroupInstancesNamedPorts <a name="DataGoogleComputeRegionInstanceGroupInstancesNamedPorts" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPorts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_group

dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPorts()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRegionInstanceGroupInstancesList <a name="DataGoogleComputeRegionInstanceGroupInstancesList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_group

dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList <a name="DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_group

dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference <a name="DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_group

dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPorts">DataGoogleComputeRegionInstanceGroupInstancesNamedPorts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupInstancesNamedPorts
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPorts">DataGoogleComputeRegionInstanceGroupInstancesNamedPorts</a>

---


### DataGoogleComputeRegionInstanceGroupInstancesOutputReference <a name="DataGoogleComputeRegionInstanceGroupInstancesOutputReference" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_compute_region_instance_group

dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.namedPorts">named_ports</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList">DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstances">DataGoogleComputeRegionInstanceGroupInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `named_ports`<sup>Required</sup> <a name="named_ports" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.namedPorts"></a>

```python
named_ports: DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList">DataGoogleComputeRegionInstanceGroupInstancesNamedPortsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstancesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleComputeRegionInstanceGroupInstances
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRegionInstanceGroup.DataGoogleComputeRegionInstanceGroupInstances">DataGoogleComputeRegionInstanceGroupInstances</a>

---



