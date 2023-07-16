# `google_data_fusion_instance_iam_policy`

Refer to the Terraform Registory for docs: [`google_data_fusion_instance_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy).

# `dataFusionInstanceIamPolicy` Submodule <a name="`dataFusionInstanceIamPolicy` Submodule" id="@cdktf/provider-google.dataFusionInstanceIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFusionInstanceIamPolicy <a name="DataFusionInstanceIamPolicy" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy google_data_fusion_instance_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance_iam_policy

dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy(
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
  policy_data: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#name DataFusionInstanceIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#policy_data DataFusionInstanceIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#id DataFusionInstanceIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#project DataFusionInstanceIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#region DataFusionInstanceIamPolicy#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#name DataFusionInstanceIamPolicy#name}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#policy_data DataFusionInstanceIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#id DataFusionInstanceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#project DataFusionInstanceIamPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#region DataFusionInstanceIamPolicy#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance_iam_policy

dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance_iam_policy

dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance_iam_policy

dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.policyDataInput">policy_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_data_input`<sup>Optional</sup> <a name="policy_data_input" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.policyDataInput"></a>

```python
policy_data_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFusionInstanceIamPolicyConfig <a name="DataFusionInstanceIamPolicyConfig" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance_iam_policy

dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  policy_data: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#name DataFusionInstanceIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#policy_data DataFusionInstanceIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#id DataFusionInstanceIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#project DataFusionInstanceIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#region DataFusionInstanceIamPolicy#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#name DataFusionInstanceIamPolicy#name}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#policy_data DataFusionInstanceIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#id DataFusionInstanceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#project DataFusionInstanceIamPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataFusionInstanceIamPolicy.DataFusionInstanceIamPolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/data_fusion_instance_iam_policy#region DataFusionInstanceIamPolicy#region}.

---



