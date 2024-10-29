# `dataGoogleCloudQuotasQuotaInfos` Submodule <a name="`dataGoogleCloudQuotasQuotaInfos` Submodule" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudQuotasQuotaInfos <a name="DataGoogleCloudQuotasQuotaInfos" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/data-sources/cloud_quotas_quota_infos google_cloud_quotas_quota_infos}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos(
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
  service: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/data-sources/cloud_quotas_quota_infos#parent DataGoogleCloudQuotasQuotaInfos#parent}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/data-sources/cloud_quotas_quota_infos#service DataGoogleCloudQuotasQuotaInfos#service}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/data-sources/cloud_quotas_quota_infos#id DataGoogleCloudQuotasQuotaInfos#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/data-sources/cloud_quotas_quota_infos#parent DataGoogleCloudQuotasQuotaInfos#parent}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.service"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/data-sources/cloud_quotas_quota_infos#service DataGoogleCloudQuotasQuotaInfos#service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/data-sources/cloud_quotas_quota_infos#id DataGoogleCloudQuotasQuotaInfos#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleCloudQuotasQuotaInfos resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleCloudQuotasQuotaInfos resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleCloudQuotasQuotaInfos to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleCloudQuotasQuotaInfos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/data-sources/cloud_quotas_quota_infos#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudQuotasQuotaInfos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.quotaInfos">quota_infos</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList">DataGoogleCloudQuotasQuotaInfosQuotaInfosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `quota_infos`<sup>Required</sup> <a name="quota_infos" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.quotaInfos"></a>

```python
quota_infos: DataGoogleCloudQuotasQuotaInfosQuotaInfosList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList">DataGoogleCloudQuotasQuotaInfosQuotaInfosList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfos.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudQuotasQuotaInfosConfig <a name="DataGoogleCloudQuotasQuotaInfosConfig" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parent: str,
  service: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/data-sources/cloud_quotas_quota_infos#parent DataGoogleCloudQuotasQuotaInfos#parent}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/data-sources/cloud_quotas_quota_infos#service DataGoogleCloudQuotasQuotaInfos#service}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/data-sources/cloud_quotas_quota_infos#id DataGoogleCloudQuotasQuotaInfos#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/data-sources/cloud_quotas_quota_infos#parent DataGoogleCloudQuotasQuotaInfos#parent}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/data-sources/cloud_quotas_quota_infos#service DataGoogleCloudQuotasQuotaInfos#service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/data-sources/cloud_quotas_quota_infos#id DataGoogleCloudQuotasQuotaInfos#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudQuotasQuotaInfosQuotaInfos <a name="DataGoogleCloudQuotasQuotaInfosQuotaInfos" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfos.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfos()
```


### DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfos <a name="DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfos" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfos.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfos()
```


### DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetails <a name="DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetails" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetails()
```


### DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibility <a name="DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibility" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibility"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibility.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibility()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList <a name="DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference <a name="DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetails">DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetails
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetails">DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetails</a>

---


### DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList <a name="DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference <a name="DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.property.applicableLocations">applicable_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.property.details">details</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList">DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.property.dimensions">dimensions</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfos">DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfos</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `applicable_locations`<sup>Required</sup> <a name="applicable_locations" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.property.applicableLocations"></a>

```python
applicable_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.property.details"></a>

```python
details: DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList">DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosDetailsList</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.property.dimensions"></a>

```python
dimensions: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfos
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfos">DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfos</a>

---


### DataGoogleCloudQuotasQuotaInfosQuotaInfosList <a name="DataGoogleCloudQuotasQuotaInfosQuotaInfosList" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference <a name="DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.containerType">container_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.dimensions">dimensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.dimensionsInfos">dimensions_infos</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList">DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.isConcurrent">is_concurrent</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.isFixed">is_fixed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.isPrecise">is_precise</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.metricDisplayName">metric_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.metricUnit">metric_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.quotaDisplayName">quota_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.quotaId">quota_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.quotaIncreaseEligibility">quota_increase_eligibility</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList">DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.refreshInterval">refresh_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.serviceRequestQuotaUri">service_request_quota_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfos">DataGoogleCloudQuotasQuotaInfosQuotaInfos</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_type`<sup>Required</sup> <a name="container_type" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.containerType"></a>

```python
container_type: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.dimensions"></a>

```python
dimensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dimensions_infos`<sup>Required</sup> <a name="dimensions_infos" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.dimensionsInfos"></a>

```python
dimensions_infos: DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList">DataGoogleCloudQuotasQuotaInfosQuotaInfosDimensionsInfosList</a>

---

##### `is_concurrent`<sup>Required</sup> <a name="is_concurrent" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.isConcurrent"></a>

```python
is_concurrent: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_fixed`<sup>Required</sup> <a name="is_fixed" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.isFixed"></a>

```python
is_fixed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_precise`<sup>Required</sup> <a name="is_precise" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.isPrecise"></a>

```python
is_precise: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `metric_display_name`<sup>Required</sup> <a name="metric_display_name" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.metricDisplayName"></a>

```python
metric_display_name: str
```

- *Type:* str

---

##### `metric_unit`<sup>Required</sup> <a name="metric_unit" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.metricUnit"></a>

```python
metric_unit: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `quota_display_name`<sup>Required</sup> <a name="quota_display_name" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.quotaDisplayName"></a>

```python
quota_display_name: str
```

- *Type:* str

---

##### `quota_id`<sup>Required</sup> <a name="quota_id" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.quotaId"></a>

```python
quota_id: str
```

- *Type:* str

---

##### `quota_increase_eligibility`<sup>Required</sup> <a name="quota_increase_eligibility" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.quotaIncreaseEligibility"></a>

```python
quota_increase_eligibility: DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList">DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList</a>

---

##### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.refreshInterval"></a>

```python
refresh_interval: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `service_request_quota_uri`<sup>Required</sup> <a name="service_request_quota_uri" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.serviceRequestQuotaUri"></a>

```python
service_request_quota_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudQuotasQuotaInfosQuotaInfos
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfos">DataGoogleCloudQuotasQuotaInfosQuotaInfos</a>

---


### DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList <a name="DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference <a name="DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_cloud_quotas_quota_infos

dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.property.ineligibilityReason">ineligibility_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.property.isEligible">is_eligible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibility">DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibility</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ineligibility_reason`<sup>Required</sup> <a name="ineligibility_reason" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.property.ineligibilityReason"></a>

```python
ineligibility_reason: str
```

- *Type:* str

---

##### `is_eligible`<sup>Required</sup> <a name="is_eligible" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.property.isEligible"></a>

```python
is_eligible: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibilityOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibility
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfos.DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibility">DataGoogleCloudQuotasQuotaInfosQuotaInfosQuotaIncreaseEligibility</a>

---



