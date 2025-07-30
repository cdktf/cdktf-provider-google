# `dataGoogleVmwareengineExternalAccessRule` Submodule <a name="`dataGoogleVmwareengineExternalAccessRule` Submodule" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineExternalAccessRule <a name="DataGoogleVmwareengineExternalAccessRule" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/vmwareengine_external_access_rule google_vmwareengine_external_access_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_external_access_rule

dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID of the external access rule. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/vmwareengine_external_access_rule#id DataGoogleVmwareengineExternalAccessRule#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.name"></a>

- *Type:* str

The ID of the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/vmwareengine_external_access_rule#name DataGoogleVmwareengineExternalAccessRule#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.parent"></a>

- *Type:* str

The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/vmwareengine_external_access_rule#parent DataGoogleVmwareengineExternalAccessRule#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/vmwareengine_external_access_rule#id DataGoogleVmwareengineExternalAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleVmwareengineExternalAccessRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_external_access_rule

dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_external_access_rule

dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_external_access_rule

dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_external_access_rule

dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleVmwareengineExternalAccessRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleVmwareengineExternalAccessRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleVmwareengineExternalAccessRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/vmwareengine_external_access_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineExternalAccessRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.destinationIpRanges">destination_ip_ranges</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList">DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.destinationPorts">destination_ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.sourceIpRanges">source_ip_ranges</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList">DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.sourcePorts">source_ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination_ip_ranges`<sup>Required</sup> <a name="destination_ip_ranges" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.destinationIpRanges"></a>

```python
destination_ip_ranges: DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList">DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList</a>

---

##### `destination_ports`<sup>Required</sup> <a name="destination_ports" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.destinationPorts"></a>

```python
destination_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_ip_ranges`<sup>Required</sup> <a name="source_ip_ranges" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.sourceIpRanges"></a>

```python
source_ip_ranges: DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList">DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList</a>

---

##### `source_ports`<sup>Required</sup> <a name="source_ports" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.sourcePorts"></a>

```python
source_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineExternalAccessRuleConfig <a name="DataGoogleVmwareengineExternalAccessRuleConfig" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_external_access_rule

dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.name">name</a></code> | <code>str</code> | The ID of the external access rule. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.parent">parent</a></code> | <code>str</code> | The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/vmwareengine_external_access_rule#id DataGoogleVmwareengineExternalAccessRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID of the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/vmwareengine_external_access_rule#name DataGoogleVmwareengineExternalAccessRule#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/vmwareengine_external_access_rule#parent DataGoogleVmwareengineExternalAccessRule#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/vmwareengine_external_access_rule#id DataGoogleVmwareengineExternalAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges <a name="DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_external_access_rule

dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges()
```


### DataGoogleVmwareengineExternalAccessRuleSourceIpRanges <a name="DataGoogleVmwareengineExternalAccessRuleSourceIpRanges" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRanges.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_external_access_rule

dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRanges()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList <a name="DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_external_access_rule

dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference <a name="DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_external_access_rule

dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddress">external_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRange">ip_address_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges">DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_address`<sup>Required</sup> <a name="external_address" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddress"></a>

```python
external_address: str
```

- *Type:* str

---

##### `ip_address_range`<sup>Required</sup> <a name="ip_address_range" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRange"></a>

```python
ip_address_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges">DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>

---


### DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList <a name="DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_external_access_rule

dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference <a name="DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_vmwareengine_external_access_rule

dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRange">ip_address_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRanges">DataGoogleVmwareengineExternalAccessRuleSourceIpRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_address_range`<sup>Required</sup> <a name="ip_address_range" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRange"></a>

```python
ip_address_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleVmwareengineExternalAccessRuleSourceIpRanges
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRanges">DataGoogleVmwareengineExternalAccessRuleSourceIpRanges</a>

---



