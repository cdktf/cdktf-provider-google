# `google_data_catalog_policy_tag_iam_binding`

Refer to the Terraform Registory for docs: [`google_data_catalog_policy_tag_iam_binding`](https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding).

# `dataCatalogPolicyTagIamBinding` Submodule <a name="`dataCatalogPolicyTagIamBinding` Submodule" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogPolicyTagIamBinding <a name="DataCatalogPolicyTagIamBinding" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding google_data_catalog_policy_tag_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_policy_tag_iam_binding

dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding(
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
  policy_tag: str,
  role: str,
  condition: DataCatalogPolicyTagIamBindingCondition = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#members DataCatalogPolicyTagIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.policyTag">policy_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#policy_tag DataCatalogPolicyTagIamBinding#policy_tag}. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#role DataCatalogPolicyTagIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition">DataCatalogPolicyTagIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#id DataCatalogPolicyTagIamBinding#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#members DataCatalogPolicyTagIamBinding#members}.

---

##### `policy_tag`<sup>Required</sup> <a name="policy_tag" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.policyTag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#policy_tag DataCatalogPolicyTagIamBinding#policy_tag}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#role DataCatalogPolicyTagIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition">DataCatalogPolicyTagIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#condition DataCatalogPolicyTagIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#id DataCatalogPolicyTagIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#expression DataCatalogPolicyTagIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#title DataCatalogPolicyTagIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#description DataCatalogPolicyTagIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_policy_tag_iam_binding

dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_policy_tag_iam_binding

dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_policy_tag_iam_binding

dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference">DataCatalogPolicyTagIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition">DataCatalogPolicyTagIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.policyTagInput">policy_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.policyTag">policy_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.condition"></a>

```python
condition: DataCatalogPolicyTagIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference">DataCatalogPolicyTagIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.conditionInput"></a>

```python
condition_input: DataCatalogPolicyTagIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition">DataCatalogPolicyTagIamBindingCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_tag_input`<sup>Optional</sup> <a name="policy_tag_input" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.policyTagInput"></a>

```python
policy_tag_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_tag`<sup>Required</sup> <a name="policy_tag" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.policyTag"></a>

```python
policy_tag: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogPolicyTagIamBindingCondition <a name="DataCatalogPolicyTagIamBindingCondition" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_policy_tag_iam_binding

dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#expression DataCatalogPolicyTagIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#title DataCatalogPolicyTagIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#description DataCatalogPolicyTagIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#expression DataCatalogPolicyTagIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#title DataCatalogPolicyTagIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#description DataCatalogPolicyTagIamBinding#description}.

---

### DataCatalogPolicyTagIamBindingConfig <a name="DataCatalogPolicyTagIamBindingConfig" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_policy_tag_iam_binding

dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  members: typing.List[str],
  policy_tag: str,
  role: str,
  condition: DataCatalogPolicyTagIamBindingCondition = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#members DataCatalogPolicyTagIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.policyTag">policy_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#policy_tag DataCatalogPolicyTagIamBinding#policy_tag}. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#role DataCatalogPolicyTagIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition">DataCatalogPolicyTagIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#id DataCatalogPolicyTagIamBinding#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#members DataCatalogPolicyTagIamBinding#members}.

---

##### `policy_tag`<sup>Required</sup> <a name="policy_tag" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.policyTag"></a>

```python
policy_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#policy_tag DataCatalogPolicyTagIamBinding#policy_tag}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#role DataCatalogPolicyTagIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.condition"></a>

```python
condition: DataCatalogPolicyTagIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition">DataCatalogPolicyTagIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#condition DataCatalogPolicyTagIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/data_catalog_policy_tag_iam_binding#id DataCatalogPolicyTagIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogPolicyTagIamBindingConditionOutputReference <a name="DataCatalogPolicyTagIamBindingConditionOutputReference" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_policy_tag_iam_binding

dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition">DataCatalogPolicyTagIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataCatalogPolicyTagIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogPolicyTagIamBinding.DataCatalogPolicyTagIamBindingCondition">DataCatalogPolicyTagIamBindingCondition</a>

---



