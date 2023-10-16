# `google_healthcare_dataset_iam_binding`

Refer to the Terraform Registory for docs: [`google_healthcare_dataset_iam_binding`](https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding).

# `healthcareDatasetIamBinding` Submodule <a name="`healthcareDatasetIamBinding` Submodule" id="@cdktf/provider-google.healthcareDatasetIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareDatasetIamBinding <a name="HealthcareDatasetIamBinding" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding google_healthcare_dataset_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset_iam_binding

healthcareDatasetIamBinding.HealthcareDatasetIamBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_id: str,
  members: typing.List[str],
  role: str,
  condition: HealthcareDatasetIamBindingCondition = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.datasetId">dataset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#dataset_id HealthcareDatasetIamBinding#dataset_id}. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#members HealthcareDatasetIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#role HealthcareDatasetIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition">HealthcareDatasetIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#id HealthcareDatasetIamBinding#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.datasetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#dataset_id HealthcareDatasetIamBinding#dataset_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#members HealthcareDatasetIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#role HealthcareDatasetIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition">HealthcareDatasetIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#condition HealthcareDatasetIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#id HealthcareDatasetIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#expression HealthcareDatasetIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#title HealthcareDatasetIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#description HealthcareDatasetIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset_iam_binding

healthcareDatasetIamBinding.HealthcareDatasetIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset_iam_binding

healthcareDatasetIamBinding.HealthcareDatasetIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset_iam_binding

healthcareDatasetIamBinding.HealthcareDatasetIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference">HealthcareDatasetIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition">HealthcareDatasetIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.condition"></a>

```python
condition: HealthcareDatasetIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference">HealthcareDatasetIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.conditionInput"></a>

```python
condition_input: HealthcareDatasetIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition">HealthcareDatasetIamBindingCondition</a>

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareDatasetIamBindingCondition <a name="HealthcareDatasetIamBindingCondition" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset_iam_binding

healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#expression HealthcareDatasetIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#title HealthcareDatasetIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#description HealthcareDatasetIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#expression HealthcareDatasetIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#title HealthcareDatasetIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#description HealthcareDatasetIamBinding#description}.

---

### HealthcareDatasetIamBindingConfig <a name="HealthcareDatasetIamBindingConfig" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset_iam_binding

healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_id: str,
  members: typing.List[str],
  role: str,
  condition: HealthcareDatasetIamBindingCondition = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.datasetId">dataset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#dataset_id HealthcareDatasetIamBinding#dataset_id}. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#members HealthcareDatasetIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#role HealthcareDatasetIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition">HealthcareDatasetIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#id HealthcareDatasetIamBinding#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#dataset_id HealthcareDatasetIamBinding#dataset_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#members HealthcareDatasetIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#role HealthcareDatasetIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.condition"></a>

```python
condition: HealthcareDatasetIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition">HealthcareDatasetIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#condition HealthcareDatasetIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/healthcare_dataset_iam_binding#id HealthcareDatasetIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareDatasetIamBindingConditionOutputReference <a name="HealthcareDatasetIamBindingConditionOutputReference" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import healthcare_dataset_iam_binding

healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition">HealthcareDatasetIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: HealthcareDatasetIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDatasetIamBinding.HealthcareDatasetIamBindingCondition">HealthcareDatasetIamBindingCondition</a>

---



