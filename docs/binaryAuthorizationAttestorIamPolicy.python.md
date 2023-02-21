# `binaryAuthorizationAttestorIamPolicy` Submodule <a name="`binaryAuthorizationAttestorIamPolicy` Submodule" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BinaryAuthorizationAttestorIamPolicy <a name="BinaryAuthorizationAttestorIamPolicy" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy google_binary_authorization_attestor_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_attestor_iam_policy

binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attestor: str,
  policy_data: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.attestor">attestor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#attestor BinaryAuthorizationAttestorIamPolicy#attestor}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#policy_data BinaryAuthorizationAttestorIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#id BinaryAuthorizationAttestorIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#project BinaryAuthorizationAttestorIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestor`<sup>Required</sup> <a name="attestor" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.attestor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#attestor BinaryAuthorizationAttestorIamPolicy#attestor}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#policy_data BinaryAuthorizationAttestorIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#id BinaryAuthorizationAttestorIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#project BinaryAuthorizationAttestorIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_attestor_iam_policy

binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_attestor_iam_policy

binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_attestor_iam_policy

binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.attestorInput">attestor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.policyDataInput">policy_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.attestor">attestor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `attestor_input`<sup>Optional</sup> <a name="attestor_input" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.attestorInput"></a>

```python
attestor_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_data_input`<sup>Optional</sup> <a name="policy_data_input" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.policyDataInput"></a>

```python
policy_data_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `attestor`<sup>Required</sup> <a name="attestor" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.attestor"></a>

```python
attestor: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BinaryAuthorizationAttestorIamPolicyConfig <a name="BinaryAuthorizationAttestorIamPolicyConfig" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_attestor_iam_policy

binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attestor: str,
  policy_data: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.attestor">attestor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#attestor BinaryAuthorizationAttestorIamPolicy#attestor}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#policy_data BinaryAuthorizationAttestorIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#id BinaryAuthorizationAttestorIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#project BinaryAuthorizationAttestorIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestor`<sup>Required</sup> <a name="attestor" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.attestor"></a>

```python
attestor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#attestor BinaryAuthorizationAttestorIamPolicy#attestor}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#policy_data BinaryAuthorizationAttestorIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#id BinaryAuthorizationAttestorIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.binaryAuthorizationAttestorIamPolicy.BinaryAuthorizationAttestorIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_policy#project BinaryAuthorizationAttestorIamPolicy#project}.

---



