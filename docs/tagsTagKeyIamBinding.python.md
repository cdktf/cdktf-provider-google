# `google_tags_tag_key_iam_binding`

Refer to the Terraform Registory for docs: [`google_tags_tag_key_iam_binding`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding).

# `tagsTagKeyIamBinding` Submodule <a name="`tagsTagKeyIamBinding` Submodule" id="@cdktf/provider-google.tagsTagKeyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagsTagKeyIamBinding <a name="TagsTagKeyIamBinding" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding google_tags_tag_key_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import tags_tag_key_iam_binding

tagsTagKeyIamBinding.TagsTagKeyIamBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  members: typing.List[str],
  role: str,
  tag_key: str,
  condition: TagsTagKeyIamBindingCondition = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#members TagsTagKeyIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#role TagsTagKeyIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#tag_key TagsTagKeyIamBinding#tag_key}. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition">TagsTagKeyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#id TagsTagKeyIamBinding#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#members TagsTagKeyIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#role TagsTagKeyIamBinding#role}.

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.tagKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#tag_key TagsTagKeyIamBinding#tag_key}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition">TagsTagKeyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#condition TagsTagKeyIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#id TagsTagKeyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#expression TagsTagKeyIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#title TagsTagKeyIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#description TagsTagKeyIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import tags_tag_key_iam_binding

tagsTagKeyIamBinding.TagsTagKeyIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import tags_tag_key_iam_binding

tagsTagKeyIamBinding.TagsTagKeyIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import tags_tag_key_iam_binding

tagsTagKeyIamBinding.TagsTagKeyIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference">TagsTagKeyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition">TagsTagKeyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.condition"></a>

```python
condition: TagsTagKeyIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference">TagsTagKeyIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.conditionInput"></a>

```python
condition_input: TagsTagKeyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition">TagsTagKeyIamBindingCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TagsTagKeyIamBindingCondition <a name="TagsTagKeyIamBindingCondition" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import tags_tag_key_iam_binding

tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#expression TagsTagKeyIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#title TagsTagKeyIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#description TagsTagKeyIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#expression TagsTagKeyIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#title TagsTagKeyIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#description TagsTagKeyIamBinding#description}.

---

### TagsTagKeyIamBindingConfig <a name="TagsTagKeyIamBindingConfig" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import tags_tag_key_iam_binding

tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  members: typing.List[str],
  role: str,
  tag_key: str,
  condition: TagsTagKeyIamBindingCondition = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#members TagsTagKeyIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#role TagsTagKeyIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#tag_key TagsTagKeyIamBinding#tag_key}. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition">TagsTagKeyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#id TagsTagKeyIamBinding#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#members TagsTagKeyIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#role TagsTagKeyIamBinding#role}.

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#tag_key TagsTagKeyIamBinding#tag_key}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.condition"></a>

```python
condition: TagsTagKeyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition">TagsTagKeyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#condition TagsTagKeyIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/tags_tag_key_iam_binding#id TagsTagKeyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### TagsTagKeyIamBindingConditionOutputReference <a name="TagsTagKeyIamBindingConditionOutputReference" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import tags_tag_key_iam_binding

tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition">TagsTagKeyIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: TagsTagKeyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.tagsTagKeyIamBinding.TagsTagKeyIamBindingCondition">TagsTagKeyIamBindingCondition</a>

---



