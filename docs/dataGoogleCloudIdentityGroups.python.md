# `dataGoogleCloudIdentityGroups` Submodule <a name="`dataGoogleCloudIdentityGroups` Submodule" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudIdentityGroups <a name="DataGoogleCloudIdentityGroups" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/cloud_identity_groups google_cloud_identity_groups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_groups

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parent: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The resource name of the entity under which this Group resides in the Cloud Identity resource hierarchy. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/cloud_identity_groups#id DataGoogleCloudIdentityGroups#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.parent"></a>

- *Type:* str

The resource name of the entity under which this Group resides in the Cloud Identity resource hierarchy.

Must be of the form identitysources/{identity_source_id} for external-identity-mapped
groups or customers/{customer_id} for Google Groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/cloud_identity_groups#parent DataGoogleCloudIdentityGroups#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/cloud_identity_groups#id DataGoogleCloudIdentityGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleCloudIdentityGroups resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_groups

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_groups

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_groups

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_groups

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleCloudIdentityGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleCloudIdentityGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleCloudIdentityGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/cloud_identity_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudIdentityGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.groups">groups</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList">DataGoogleCloudIdentityGroupsGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.groups"></a>

```python
groups: DataGoogleCloudIdentityGroupsGroupsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList">DataGoogleCloudIdentityGroupsGroupsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudIdentityGroupsConfig <a name="DataGoogleCloudIdentityGroupsConfig" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_groups

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parent: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.parent">parent</a></code> | <code>str</code> | The resource name of the entity under which this Group resides in the Cloud Identity resource hierarchy. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/cloud_identity_groups#id DataGoogleCloudIdentityGroups#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The resource name of the entity under which this Group resides in the Cloud Identity resource hierarchy.

Must be of the form identitysources/{identity_source_id} for external-identity-mapped
groups or customers/{customer_id} for Google Groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/cloud_identity_groups#parent DataGoogleCloudIdentityGroups#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/cloud_identity_groups#id DataGoogleCloudIdentityGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudIdentityGroupsGroups <a name="DataGoogleCloudIdentityGroupsGroups" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_groups

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroups()
```


### DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys <a name="DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_groups

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys()
```


### DataGoogleCloudIdentityGroupsGroupsGroupKey <a name="DataGoogleCloudIdentityGroupsGroupsGroupKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_groups

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKey()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList <a name="DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_groups

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference <a name="DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_groups

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys">DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys">DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeys</a>

---


### DataGoogleCloudIdentityGroupsGroupsGroupKeyList <a name="DataGoogleCloudIdentityGroupsGroupsGroupKeyList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_groups

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference <a name="DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_groups

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKey">DataGoogleCloudIdentityGroupsGroupsGroupKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudIdentityGroupsGroupsGroupKey
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKey">DataGoogleCloudIdentityGroupsGroupsGroupKey</a>

---


### DataGoogleCloudIdentityGroupsGroupsList <a name="DataGoogleCloudIdentityGroupsGroupsList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_groups

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudIdentityGroupsGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudIdentityGroupsGroupsOutputReference <a name="DataGoogleCloudIdentityGroupsGroupsOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_identity_groups

dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.additionalGroupKeys">additional_group_keys</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList">DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.groupKey">group_key</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList">DataGoogleCloudIdentityGroupsGroupsGroupKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.initialGroupConfig">initial_group_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroups">DataGoogleCloudIdentityGroupsGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_group_keys`<sup>Required</sup> <a name="additional_group_keys" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.additionalGroupKeys"></a>

```python
additional_group_keys: DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList">DataGoogleCloudIdentityGroupsGroupsAdditionalGroupKeysList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `group_key`<sup>Required</sup> <a name="group_key" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.groupKey"></a>

```python
group_key: DataGoogleCloudIdentityGroupsGroupsGroupKeyList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsGroupKeyList">DataGoogleCloudIdentityGroupsGroupsGroupKeyList</a>

---

##### `initial_group_config`<sup>Required</sup> <a name="initial_group_config" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.initialGroupConfig"></a>

```python
initial_group_config: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudIdentityGroupsGroups
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroups.DataGoogleCloudIdentityGroupsGroups">DataGoogleCloudIdentityGroupsGroups</a>

---



