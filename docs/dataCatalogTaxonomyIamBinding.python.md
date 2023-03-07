# `dataCatalogTaxonomyIamBinding` Submodule <a name="`dataCatalogTaxonomyIamBinding` Submodule" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogTaxonomyIamBinding <a name="DataCatalogTaxonomyIamBinding" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding google_data_catalog_taxonomy_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_taxonomy_iam_binding

dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  members: typing.List[str],
  role: str,
  taxonomy: str,
  condition: DataCatalogTaxonomyIamBindingCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#members DataCatalogTaxonomyIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#role DataCatalogTaxonomyIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.taxonomy">taxonomy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#taxonomy DataCatalogTaxonomyIamBinding#taxonomy}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition">DataCatalogTaxonomyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#id DataCatalogTaxonomyIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#project DataCatalogTaxonomyIamBinding#project}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#region DataCatalogTaxonomyIamBinding#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#members DataCatalogTaxonomyIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#role DataCatalogTaxonomyIamBinding#role}.

---

##### `taxonomy`<sup>Required</sup> <a name="taxonomy" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.taxonomy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#taxonomy DataCatalogTaxonomyIamBinding#taxonomy}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition">DataCatalogTaxonomyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#condition DataCatalogTaxonomyIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#id DataCatalogTaxonomyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#project DataCatalogTaxonomyIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#region DataCatalogTaxonomyIamBinding#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#expression DataCatalogTaxonomyIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#title DataCatalogTaxonomyIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#description DataCatalogTaxonomyIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_taxonomy_iam_binding

dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_taxonomy_iam_binding

dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_taxonomy_iam_binding

dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference">DataCatalogTaxonomyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition">DataCatalogTaxonomyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.taxonomyInput">taxonomy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.taxonomy">taxonomy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.condition"></a>

```python
condition: DataCatalogTaxonomyIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference">DataCatalogTaxonomyIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.conditionInput"></a>

```python
condition_input: DataCatalogTaxonomyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition">DataCatalogTaxonomyIamBindingCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `taxonomy_input`<sup>Optional</sup> <a name="taxonomy_input" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.taxonomyInput"></a>

```python
taxonomy_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `taxonomy`<sup>Required</sup> <a name="taxonomy" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.taxonomy"></a>

```python
taxonomy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogTaxonomyIamBindingCondition <a name="DataCatalogTaxonomyIamBindingCondition" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_taxonomy_iam_binding

dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#expression DataCatalogTaxonomyIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#title DataCatalogTaxonomyIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#description DataCatalogTaxonomyIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#expression DataCatalogTaxonomyIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#title DataCatalogTaxonomyIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#description DataCatalogTaxonomyIamBinding#description}.

---

### DataCatalogTaxonomyIamBindingConfig <a name="DataCatalogTaxonomyIamBindingConfig" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_taxonomy_iam_binding

dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  members: typing.List[str],
  role: str,
  taxonomy: str,
  condition: DataCatalogTaxonomyIamBindingCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#members DataCatalogTaxonomyIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#role DataCatalogTaxonomyIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.taxonomy">taxonomy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#taxonomy DataCatalogTaxonomyIamBinding#taxonomy}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition">DataCatalogTaxonomyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#id DataCatalogTaxonomyIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#project DataCatalogTaxonomyIamBinding#project}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#region DataCatalogTaxonomyIamBinding#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#members DataCatalogTaxonomyIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#role DataCatalogTaxonomyIamBinding#role}.

---

##### `taxonomy`<sup>Required</sup> <a name="taxonomy" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.taxonomy"></a>

```python
taxonomy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#taxonomy DataCatalogTaxonomyIamBinding#taxonomy}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.condition"></a>

```python
condition: DataCatalogTaxonomyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition">DataCatalogTaxonomyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#condition DataCatalogTaxonomyIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#id DataCatalogTaxonomyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#project DataCatalogTaxonomyIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_taxonomy_iam_binding#region DataCatalogTaxonomyIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogTaxonomyIamBindingConditionOutputReference <a name="DataCatalogTaxonomyIamBindingConditionOutputReference" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_taxonomy_iam_binding

dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition">DataCatalogTaxonomyIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataCatalogTaxonomyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTaxonomyIamBinding.DataCatalogTaxonomyIamBindingCondition">DataCatalogTaxonomyIamBindingCondition</a>

---



