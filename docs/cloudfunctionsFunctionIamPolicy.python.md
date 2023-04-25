# `google_cloudfunctions_function_iam_policy`

Refer to the Terraform Registory for docs: [`google_cloudfunctions_function_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy).

# `cloudfunctionsFunctionIamPolicy` Submodule <a name="`cloudfunctionsFunctionIamPolicy` Submodule" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfunctionsFunctionIamPolicy <a name="CloudfunctionsFunctionIamPolicy" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy google_cloudfunctions_function_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions_function_iam_policy

cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_function: str,
  policy_data: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.cloudFunction">cloud_function</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#cloud_function CloudfunctionsFunctionIamPolicy#cloud_function}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#policy_data CloudfunctionsFunctionIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#id CloudfunctionsFunctionIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#project CloudfunctionsFunctionIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#region CloudfunctionsFunctionIamPolicy#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_function`<sup>Required</sup> <a name="cloud_function" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.cloudFunction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#cloud_function CloudfunctionsFunctionIamPolicy#cloud_function}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#policy_data CloudfunctionsFunctionIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#id CloudfunctionsFunctionIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#project CloudfunctionsFunctionIamPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#region CloudfunctionsFunctionIamPolicy#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions_function_iam_policy

cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions_function_iam_policy

cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions_function_iam_policy

cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.cloudFunctionInput">cloud_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.policyDataInput">policy_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.cloudFunction">cloud_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `cloud_function_input`<sup>Optional</sup> <a name="cloud_function_input" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.cloudFunctionInput"></a>

```python
cloud_function_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_data_input`<sup>Optional</sup> <a name="policy_data_input" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.policyDataInput"></a>

```python
policy_data_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `cloud_function`<sup>Required</sup> <a name="cloud_function" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.cloudFunction"></a>

```python
cloud_function: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfunctionsFunctionIamPolicyConfig <a name="CloudfunctionsFunctionIamPolicyConfig" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudfunctions_function_iam_policy

cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_function: str,
  policy_data: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.cloudFunction">cloud_function</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#cloud_function CloudfunctionsFunctionIamPolicy#cloud_function}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#policy_data CloudfunctionsFunctionIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#id CloudfunctionsFunctionIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#project CloudfunctionsFunctionIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#region CloudfunctionsFunctionIamPolicy#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_function`<sup>Required</sup> <a name="cloud_function" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.cloudFunction"></a>

```python
cloud_function: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#cloud_function CloudfunctionsFunctionIamPolicy#cloud_function}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#policy_data CloudfunctionsFunctionIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#id CloudfunctionsFunctionIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#project CloudfunctionsFunctionIamPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.cloudfunctionsFunctionIamPolicy.CloudfunctionsFunctionIamPolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/cloudfunctions_function_iam_policy#region CloudfunctionsFunctionIamPolicy#region}.

---



