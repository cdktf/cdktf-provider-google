# `dataGoogleIapWebTypeAppEngineIamPolicy` Submodule <a name="`dataGoogleIapWebTypeAppEngineIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIapWebTypeAppEngineIamPolicy <a name="DataGoogleIapWebTypeAppEngineIamPolicy" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/iap_web_type_app_engine_iam_policy google_iap_web_type_app_engine_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iap_web_type_app_engine_iam_policy

dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/iap_web_type_app_engine_iam_policy#app_id DataGoogleIapWebTypeAppEngineIamPolicy#app_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/iap_web_type_app_engine_iam_policy#id DataGoogleIapWebTypeAppEngineIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/iap_web_type_app_engine_iam_policy#project DataGoogleIapWebTypeAppEngineIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.appId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/iap_web_type_app_engine_iam_policy#app_id DataGoogleIapWebTypeAppEngineIamPolicy#app_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/iap_web_type_app_engine_iam_policy#id DataGoogleIapWebTypeAppEngineIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/iap_web_type_app_engine_iam_policy#project DataGoogleIapWebTypeAppEngineIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleIapWebTypeAppEngineIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_iap_web_type_app_engine_iam_policy

dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_iap_web_type_app_engine_iam_policy

dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_iap_web_type_app_engine_iam_policy

dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_iap_web_type_app_engine_iam_policy

dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleIapWebTypeAppEngineIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleIapWebTypeAppEngineIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleIapWebTypeAppEngineIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/iap_web_type_app_engine_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleIapWebTypeAppEngineIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIapWebTypeAppEngineIamPolicyConfig <a name="DataGoogleIapWebTypeAppEngineIamPolicyConfig" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iap_web_type_app_engine_iam_policy

dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/iap_web_type_app_engine_iam_policy#app_id DataGoogleIapWebTypeAppEngineIamPolicy#app_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/iap_web_type_app_engine_iam_policy#id DataGoogleIapWebTypeAppEngineIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/iap_web_type_app_engine_iam_policy#project DataGoogleIapWebTypeAppEngineIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/iap_web_type_app_engine_iam_policy#app_id DataGoogleIapWebTypeAppEngineIamPolicy#app_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/iap_web_type_app_engine_iam_policy#id DataGoogleIapWebTypeAppEngineIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleIapWebTypeAppEngineIamPolicy.DataGoogleIapWebTypeAppEngineIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/data-sources/iap_web_type_app_engine_iam_policy#project DataGoogleIapWebTypeAppEngineIamPolicy#project}.

---



