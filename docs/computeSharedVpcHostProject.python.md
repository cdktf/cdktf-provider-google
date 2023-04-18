# `google_compute_shared_vpc_host_project`

Refer to the Terraform Registory for docs: [`google_compute_shared_vpc_host_project`](https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project).

# `computeSharedVpcHostProject` Submodule <a name="`computeSharedVpcHostProject` Submodule" id="@cdktf/provider-google.computeSharedVpcHostProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSharedVpcHostProject <a name="ComputeSharedVpcHostProject" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project google_compute_shared_vpc_host_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_shared_vpc_host_project

computeSharedVpcHostProject.ComputeSharedVpcHostProject(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project: str,
  id: str = None,
  timeouts: ComputeSharedVpcHostProjectTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project that will serve as a Shared VPC host project. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project#id ComputeSharedVpcHostProject#id}. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project that will serve as a Shared VPC host project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project#project ComputeSharedVpcHostProject#project}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project#id ComputeSharedVpcHostProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project#timeouts ComputeSharedVpcHostProject#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project#create ComputeSharedVpcHostProject#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project#delete ComputeSharedVpcHostProject#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_shared_vpc_host_project

computeSharedVpcHostProject.ComputeSharedVpcHostProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_shared_vpc_host_project

computeSharedVpcHostProject.ComputeSharedVpcHostProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_shared_vpc_host_project

computeSharedVpcHostProject.ComputeSharedVpcHostProject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference">ComputeSharedVpcHostProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.timeouts"></a>

```python
timeouts: ComputeSharedVpcHostProjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference">ComputeSharedVpcHostProjectTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ComputeSharedVpcHostProjectTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSharedVpcHostProjectConfig <a name="ComputeSharedVpcHostProjectConfig" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_shared_vpc_host_project

computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project: str,
  id: str = None,
  timeouts: ComputeSharedVpcHostProjectTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.project">project</a></code> | <code>str</code> | The ID of the project that will serve as a Shared VPC host project. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project#id ComputeSharedVpcHostProject#id}. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project that will serve as a Shared VPC host project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project#project ComputeSharedVpcHostProject#project}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project#id ComputeSharedVpcHostProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectConfig.property.timeouts"></a>

```python
timeouts: ComputeSharedVpcHostProjectTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project#timeouts ComputeSharedVpcHostProject#timeouts}

---

### ComputeSharedVpcHostProjectTimeouts <a name="ComputeSharedVpcHostProjectTimeouts" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_shared_vpc_host_project

computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project#create ComputeSharedVpcHostProject#create}. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project#delete ComputeSharedVpcHostProject#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project#create ComputeSharedVpcHostProject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_shared_vpc_host_project#delete ComputeSharedVpcHostProject#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSharedVpcHostProjectTimeoutsOutputReference <a name="ComputeSharedVpcHostProjectTimeoutsOutputReference" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_shared_vpc_host_project

computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ComputeSharedVpcHostProjectTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.computeSharedVpcHostProject.ComputeSharedVpcHostProjectTimeouts">ComputeSharedVpcHostProjectTimeouts</a>, cdktf.IResolvable]

---



