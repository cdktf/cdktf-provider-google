# `google_cloudfunctions2_function_iam_binding`

Refer to the Terraform Registory for docs: [`google_cloudfunctions2_function_iam_binding`](https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding).

# `cloudfunctions2FunctionIamBinding` Submodule <a name="`cloudfunctions2FunctionIamBinding` Submodule" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudfunctions2FunctionIamBinding <a name="Cloudfunctions2FunctionIamBinding" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding google_cloudfunctions2_function_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function_iam_binding

cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_function: str,
  members: typing.List[str],
  role: str,
  condition: Cloudfunctions2FunctionIamBindingCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.cloudFunction">cloud_function</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#cloud_function Cloudfunctions2FunctionIamBinding#cloud_function}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#members Cloudfunctions2FunctionIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#role Cloudfunctions2FunctionIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition">Cloudfunctions2FunctionIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#id Cloudfunctions2FunctionIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#location Cloudfunctions2FunctionIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#project Cloudfunctions2FunctionIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_function`<sup>Required</sup> <a name="cloud_function" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.cloudFunction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#cloud_function Cloudfunctions2FunctionIamBinding#cloud_function}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#members Cloudfunctions2FunctionIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#role Cloudfunctions2FunctionIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition">Cloudfunctions2FunctionIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#condition Cloudfunctions2FunctionIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#id Cloudfunctions2FunctionIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#location Cloudfunctions2FunctionIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#project Cloudfunctions2FunctionIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#expression Cloudfunctions2FunctionIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#title Cloudfunctions2FunctionIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#description Cloudfunctions2FunctionIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function_iam_binding

cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function_iam_binding

cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function_iam_binding

cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference">Cloudfunctions2FunctionIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.cloudFunctionInput">cloud_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition">Cloudfunctions2FunctionIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.cloudFunction">cloud_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.condition"></a>

```python
condition: Cloudfunctions2FunctionIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference">Cloudfunctions2FunctionIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `cloud_function_input`<sup>Optional</sup> <a name="cloud_function_input" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.cloudFunctionInput"></a>

```python
cloud_function_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.conditionInput"></a>

```python
condition_input: Cloudfunctions2FunctionIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition">Cloudfunctions2FunctionIamBindingCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `cloud_function`<sup>Required</sup> <a name="cloud_function" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.cloudFunction"></a>

```python
cloud_function: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Cloudfunctions2FunctionIamBindingCondition <a name="Cloudfunctions2FunctionIamBindingCondition" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function_iam_binding

cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#expression Cloudfunctions2FunctionIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#title Cloudfunctions2FunctionIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#description Cloudfunctions2FunctionIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#expression Cloudfunctions2FunctionIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#title Cloudfunctions2FunctionIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#description Cloudfunctions2FunctionIamBinding#description}.

---

### Cloudfunctions2FunctionIamBindingConfig <a name="Cloudfunctions2FunctionIamBindingConfig" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function_iam_binding

cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_function: str,
  members: typing.List[str],
  role: str,
  condition: Cloudfunctions2FunctionIamBindingCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.cloudFunction">cloud_function</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#cloud_function Cloudfunctions2FunctionIamBinding#cloud_function}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#members Cloudfunctions2FunctionIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#role Cloudfunctions2FunctionIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition">Cloudfunctions2FunctionIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#id Cloudfunctions2FunctionIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#location Cloudfunctions2FunctionIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#project Cloudfunctions2FunctionIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_function`<sup>Required</sup> <a name="cloud_function" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.cloudFunction"></a>

```python
cloud_function: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#cloud_function Cloudfunctions2FunctionIamBinding#cloud_function}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#members Cloudfunctions2FunctionIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#role Cloudfunctions2FunctionIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.condition"></a>

```python
condition: Cloudfunctions2FunctionIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition">Cloudfunctions2FunctionIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#condition Cloudfunctions2FunctionIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#id Cloudfunctions2FunctionIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#location Cloudfunctions2FunctionIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/cloudfunctions2_function_iam_binding#project Cloudfunctions2FunctionIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### Cloudfunctions2FunctionIamBindingConditionOutputReference <a name="Cloudfunctions2FunctionIamBindingConditionOutputReference" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions2_function_iam_binding

cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition">Cloudfunctions2FunctionIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: Cloudfunctions2FunctionIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition">Cloudfunctions2FunctionIamBindingCondition</a>

---



