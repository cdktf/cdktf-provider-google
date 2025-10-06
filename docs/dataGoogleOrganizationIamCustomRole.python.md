# `dataGoogleOrganizationIamCustomRole` Submodule <a name="`dataGoogleOrganizationIamCustomRole` Submodule" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOrganizationIamCustomRole <a name="DataGoogleOrganizationIamCustomRole" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/organization_iam_custom_role google_organization_iam_custom_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_organization_iam_custom_role

dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  org_id: str,
  role_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The numeric ID of the organization in which you want to create a custom role. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.roleId">role_id</a></code> | <code>str</code> | The role id to use for this role. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/organization_iam_custom_role#id DataGoogleOrganizationIamCustomRole#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.orgId"></a>

- *Type:* str

The numeric ID of the organization in which you want to create a custom role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/organization_iam_custom_role#org_id DataGoogleOrganizationIamCustomRole#org_id}

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.roleId"></a>

- *Type:* str

The role id to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/organization_iam_custom_role#role_id DataGoogleOrganizationIamCustomRole#role_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/organization_iam_custom_role#id DataGoogleOrganizationIamCustomRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleOrganizationIamCustomRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_organization_iam_custom_role

dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_organization_iam_custom_role

dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_organization_iam_custom_role

dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_organization_iam_custom_role

dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleOrganizationIamCustomRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleOrganizationIamCustomRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleOrganizationIamCustomRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/organization_iam_custom_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleOrganizationIamCustomRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.deleted">deleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.deleted"></a>

```python
deleted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOrganizationIamCustomRoleConfig <a name="DataGoogleOrganizationIamCustomRoleConfig" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_organization_iam_custom_role

dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  org_id: str,
  role_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.orgId">org_id</a></code> | <code>str</code> | The numeric ID of the organization in which you want to create a custom role. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.roleId">role_id</a></code> | <code>str</code> | The role id to use for this role. |
| <code><a href="#@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/organization_iam_custom_role#id DataGoogleOrganizationIamCustomRole#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The numeric ID of the organization in which you want to create a custom role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/organization_iam_custom_role#org_id DataGoogleOrganizationIamCustomRole#org_id}

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

The role id to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/organization_iam_custom_role#role_id DataGoogleOrganizationIamCustomRole#role_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleOrganizationIamCustomRole.DataGoogleOrganizationIamCustomRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/data-sources/organization_iam_custom_role#id DataGoogleOrganizationIamCustomRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



