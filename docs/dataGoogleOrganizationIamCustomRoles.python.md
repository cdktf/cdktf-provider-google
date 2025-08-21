# `dataGoogleOrganizationIamCustomRoles` Submodule <a name="`dataGoogleOrganizationIamCustomRoles` Submodule" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOrganizationIamCustomRoles <a name="DataGoogleOrganizationIamCustomRoles" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles google_organization_iam_custom_roles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_organization_iam_custom_roles

dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles(
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
  org_id: str = None,
  show_deleted: typing.Union[bool, IResolvable] = None,
  view: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#id DataGoogleOrganizationIamCustomRoles#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#org_id DataGoogleOrganizationIamCustomRoles#org_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.showDeleted">show_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#show_deleted DataGoogleOrganizationIamCustomRoles#show_deleted}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#view DataGoogleOrganizationIamCustomRoles#view}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#id DataGoogleOrganizationIamCustomRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `org_id`<sup>Optional</sup> <a name="org_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.orgId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#org_id DataGoogleOrganizationIamCustomRoles#org_id}.

---

##### `show_deleted`<sup>Optional</sup> <a name="show_deleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.showDeleted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#show_deleted DataGoogleOrganizationIamCustomRoles#show_deleted}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.Initializer.parameter.view"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#view DataGoogleOrganizationIamCustomRoles#view}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetOrgId">reset_org_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetShowDeleted">reset_show_deleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetView">reset_view</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_org_id` <a name="reset_org_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetOrgId"></a>

```python
def reset_org_id() -> None
```

##### `reset_show_deleted` <a name="reset_show_deleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetShowDeleted"></a>

```python
def reset_show_deleted() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.resetView"></a>

```python
def reset_view() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleOrganizationIamCustomRoles resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_organization_iam_custom_roles

dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_organization_iam_custom_roles

dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_organization_iam_custom_roles

dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_organization_iam_custom_roles

dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleOrganizationIamCustomRoles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleOrganizationIamCustomRoles to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleOrganizationIamCustomRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOrganizationIamCustomRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList">DataGoogleOrganizationIamCustomRolesRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.showDeletedInput">show_deleted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.viewInput">view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.showDeleted">show_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.view">view</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.roles"></a>

```python
roles: DataGoogleOrganizationIamCustomRolesRolesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList">DataGoogleOrganizationIamCustomRolesRolesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `show_deleted_input`<sup>Optional</sup> <a name="show_deleted_input" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.showDeletedInput"></a>

```python
show_deleted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.viewInput"></a>

```python
view_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `show_deleted`<sup>Required</sup> <a name="show_deleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.showDeleted"></a>

```python
show_deleted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.view"></a>

```python
view: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRoles.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOrganizationIamCustomRolesConfig <a name="DataGoogleOrganizationIamCustomRolesConfig" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_organization_iam_custom_roles

dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  org_id: str = None,
  show_deleted: typing.Union[bool, IResolvable] = None,
  view: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#id DataGoogleOrganizationIamCustomRoles#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#org_id DataGoogleOrganizationIamCustomRoles#org_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.showDeleted">show_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#show_deleted DataGoogleOrganizationIamCustomRoles#show_deleted}. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#view DataGoogleOrganizationIamCustomRoles#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#id DataGoogleOrganizationIamCustomRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `org_id`<sup>Optional</sup> <a name="org_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#org_id DataGoogleOrganizationIamCustomRoles#org_id}.

---

##### `show_deleted`<sup>Optional</sup> <a name="show_deleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.showDeleted"></a>

```python
show_deleted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#show_deleted DataGoogleOrganizationIamCustomRoles#show_deleted}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesConfig.property.view"></a>

```python
view: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/organization_iam_custom_roles#view DataGoogleOrganizationIamCustomRoles#view}.

---

### DataGoogleOrganizationIamCustomRolesRoles <a name="DataGoogleOrganizationIamCustomRolesRoles" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_organization_iam_custom_roles

dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOrganizationIamCustomRolesRolesList <a name="DataGoogleOrganizationIamCustomRolesRolesList" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_organization_iam_custom_roles

dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleOrganizationIamCustomRolesRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleOrganizationIamCustomRolesRolesOutputReference <a name="DataGoogleOrganizationIamCustomRolesRolesOutputReference" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_organization_iam_custom_roles

dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.deleted">deleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles">DataGoogleOrganizationIamCustomRolesRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.deleted"></a>

```python
deleted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleOrganizationIamCustomRolesRoles
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRoles.DataGoogleOrganizationIamCustomRolesRoles">DataGoogleOrganizationIamCustomRolesRoles</a>

---



