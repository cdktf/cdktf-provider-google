# `data_google_data_catalog_policy_tag_iam_policy`

Refer to the Terraform Registory for docs: [`data_google_data_catalog_policy_tag_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/data_catalog_policy_tag_iam_policy).

# `dataGoogleDataCatalogPolicyTagIamPolicy` Submodule <a name="`dataGoogleDataCatalogPolicyTagIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDataCatalogPolicyTagIamPolicy <a name="DataGoogleDataCatalogPolicyTagIamPolicy" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/data_catalog_policy_tag_iam_policy google_data_catalog_policy_tag_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_data_catalog_policy_tag_iam_policy

dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_tag: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.policyTag">policy_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/data_catalog_policy_tag_iam_policy#policy_tag DataGoogleDataCatalogPolicyTagIamPolicy#policy_tag}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/data_catalog_policy_tag_iam_policy#id DataGoogleDataCatalogPolicyTagIamPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_tag`<sup>Required</sup> <a name="policy_tag" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.policyTag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/data_catalog_policy_tag_iam_policy#policy_tag DataGoogleDataCatalogPolicyTagIamPolicy#policy_tag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/data_catalog_policy_tag_iam_policy#id DataGoogleDataCatalogPolicyTagIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_data_catalog_policy_tag_iam_policy

dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_data_catalog_policy_tag_iam_policy

dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_data_catalog_policy_tag_iam_policy

dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.policyTagInput">policy_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.policyTag">policy_tag</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_tag_input`<sup>Optional</sup> <a name="policy_tag_input" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.policyTagInput"></a>

```python
policy_tag_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_tag`<sup>Required</sup> <a name="policy_tag" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.policyTag"></a>

```python
policy_tag: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDataCatalogPolicyTagIamPolicyConfig <a name="DataGoogleDataCatalogPolicyTagIamPolicyConfig" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_data_catalog_policy_tag_iam_policy

dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_tag: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.policyTag">policy_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/data_catalog_policy_tag_iam_policy#policy_tag DataGoogleDataCatalogPolicyTagIamPolicy#policy_tag}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/data_catalog_policy_tag_iam_policy#id DataGoogleDataCatalogPolicyTagIamPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_tag`<sup>Required</sup> <a name="policy_tag" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.policyTag"></a>

```python
policy_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/data_catalog_policy_tag_iam_policy#policy_tag DataGoogleDataCatalogPolicyTagIamPolicy#policy_tag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDataCatalogPolicyTagIamPolicy.DataGoogleDataCatalogPolicyTagIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/data_catalog_policy_tag_iam_policy#id DataGoogleDataCatalogPolicyTagIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



