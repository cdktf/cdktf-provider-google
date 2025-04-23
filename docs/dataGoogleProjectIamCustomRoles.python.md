# `dataGoogleProjectIamCustomRoles` Submodule <a name="`dataGoogleProjectIamCustomRoles` Submodule" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleProjectIamCustomRoles <a name="DataGoogleProjectIamCustomRoles" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles google_project_iam_custom_roles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_iam_custom_roles

dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles(
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
  project: str = None,
  show_deleted: typing.Union[bool, IResolvable] = None,
  view: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#id DataGoogleProjectIamCustomRoles#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#project DataGoogleProjectIamCustomRoles#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.showDeleted">show_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#show_deleted DataGoogleProjectIamCustomRoles#show_deleted}. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#view DataGoogleProjectIamCustomRoles#view}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#id DataGoogleProjectIamCustomRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#project DataGoogleProjectIamCustomRoles#project}.

---

##### `show_deleted`<sup>Optional</sup> <a name="show_deleted" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.showDeleted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#show_deleted DataGoogleProjectIamCustomRoles#show_deleted}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.Initializer.parameter.view"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#view DataGoogleProjectIamCustomRoles#view}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetShowDeleted">reset_show_deleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetView">reset_view</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_show_deleted` <a name="reset_show_deleted" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetShowDeleted"></a>

```python
def reset_show_deleted() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.resetView"></a>

```python
def reset_view() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleProjectIamCustomRoles resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_iam_custom_roles

dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_iam_custom_roles

dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_iam_custom_roles

dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_iam_custom_roles

dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleProjectIamCustomRoles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleProjectIamCustomRoles to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleProjectIamCustomRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleProjectIamCustomRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList">DataGoogleProjectIamCustomRolesRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.showDeletedInput">show_deleted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.viewInput">view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.showDeleted">show_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.view">view</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.roles"></a>

```python
roles: DataGoogleProjectIamCustomRolesRolesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList">DataGoogleProjectIamCustomRolesRolesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `show_deleted_input`<sup>Optional</sup> <a name="show_deleted_input" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.showDeletedInput"></a>

```python
show_deleted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.viewInput"></a>

```python
view_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `show_deleted`<sup>Required</sup> <a name="show_deleted" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.showDeleted"></a>

```python
show_deleted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.view"></a>

```python
view: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRoles.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleProjectIamCustomRolesConfig <a name="DataGoogleProjectIamCustomRolesConfig" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_iam_custom_roles

dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  project: str = None,
  show_deleted: typing.Union[bool, IResolvable] = None,
  view: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#id DataGoogleProjectIamCustomRoles#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#project DataGoogleProjectIamCustomRoles#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.showDeleted">show_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#show_deleted DataGoogleProjectIamCustomRoles#show_deleted}. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#view DataGoogleProjectIamCustomRoles#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#id DataGoogleProjectIamCustomRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#project DataGoogleProjectIamCustomRoles#project}.

---

##### `show_deleted`<sup>Optional</sup> <a name="show_deleted" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.showDeleted"></a>

```python
show_deleted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#show_deleted DataGoogleProjectIamCustomRoles#show_deleted}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesConfig.property.view"></a>

```python
view: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/project_iam_custom_roles#view DataGoogleProjectIamCustomRoles#view}.

---

### DataGoogleProjectIamCustomRolesRoles <a name="DataGoogleProjectIamCustomRolesRoles" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_iam_custom_roles

dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRoles()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleProjectIamCustomRolesRolesList <a name="DataGoogleProjectIamCustomRolesRolesList" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_iam_custom_roles

dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleProjectIamCustomRolesRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleProjectIamCustomRolesRolesOutputReference <a name="DataGoogleProjectIamCustomRolesRolesOutputReference" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_project_iam_custom_roles

dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.deleted">deleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRoles">DataGoogleProjectIamCustomRolesRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.deleted"></a>

```python
deleted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleProjectIamCustomRolesRoles
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleProjectIamCustomRoles.DataGoogleProjectIamCustomRolesRoles">DataGoogleProjectIamCustomRolesRoles</a>

---



