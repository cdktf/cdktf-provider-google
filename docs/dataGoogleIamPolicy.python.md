# `dataGoogleIamPolicy` Submodule <a name="`dataGoogleIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamPolicy <a name="DataGoogleIamPolicy" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy google_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audit_config: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyAuditConfig]] = None,
  binding: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyBinding]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.auditConfig">audit_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig">DataGoogleIamPolicyAuditConfig</a>]]</code> | audit_config block. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.binding">binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding">DataGoogleIamPolicyBinding</a>]]</code> | binding block. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#id DataGoogleIamPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_config`<sup>Optional</sup> <a name="audit_config" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.auditConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig">DataGoogleIamPolicyAuditConfig</a>]]

audit_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#audit_config DataGoogleIamPolicy#audit_config}

---

##### `binding`<sup>Optional</sup> <a name="binding" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.binding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding">DataGoogleIamPolicyBinding</a>]]

binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#binding DataGoogleIamPolicy#binding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#id DataGoogleIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.putAuditConfig">put_audit_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.putBinding">put_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.resetAuditConfig">reset_audit_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.resetBinding">reset_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_audit_config` <a name="put_audit_config" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.putAuditConfig"></a>

```python
def put_audit_config(
  value: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyAuditConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.putAuditConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig">DataGoogleIamPolicyAuditConfig</a>]]

---

##### `put_binding` <a name="put_binding" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.putBinding"></a>

```python
def put_binding(
  value: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.putBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding">DataGoogleIamPolicyBinding</a>]]

---

##### `reset_audit_config` <a name="reset_audit_config" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.resetAuditConfig"></a>

```python
def reset_audit_config() -> None
```

##### `reset_binding` <a name="reset_binding" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.resetBinding"></a>

```python
def reset_binding() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.auditConfig">audit_config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList">DataGoogleIamPolicyAuditConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.binding">binding</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList">DataGoogleIamPolicyBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.auditConfigInput">audit_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig">DataGoogleIamPolicyAuditConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.bindingInput">binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding">DataGoogleIamPolicyBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `audit_config`<sup>Required</sup> <a name="audit_config" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.auditConfig"></a>

```python
audit_config: DataGoogleIamPolicyAuditConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList">DataGoogleIamPolicyAuditConfigList</a>

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.binding"></a>

```python
binding: DataGoogleIamPolicyBindingList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList">DataGoogleIamPolicyBindingList</a>

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `audit_config_input`<sup>Optional</sup> <a name="audit_config_input" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.auditConfigInput"></a>

```python
audit_config_input: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyAuditConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig">DataGoogleIamPolicyAuditConfig</a>]]

---

##### `binding_input`<sup>Optional</sup> <a name="binding_input" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.bindingInput"></a>

```python
binding_input: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding">DataGoogleIamPolicyBinding</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamPolicyAuditConfig <a name="DataGoogleIamPolicyAuditConfig" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig(
  audit_log_configs: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyAuditConfigAuditLogConfigs]],
  service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig.property.auditLogConfigs">audit_log_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs">DataGoogleIamPolicyAuditConfigAuditLogConfigs</a>]]</code> | audit_log_configs block. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#service DataGoogleIamPolicy#service}. |

---

##### `audit_log_configs`<sup>Required</sup> <a name="audit_log_configs" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig.property.auditLogConfigs"></a>

```python
audit_log_configs: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyAuditConfigAuditLogConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs">DataGoogleIamPolicyAuditConfigAuditLogConfigs</a>]]

audit_log_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#audit_log_configs DataGoogleIamPolicy#audit_log_configs}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#service DataGoogleIamPolicy#service}.

---

### DataGoogleIamPolicyAuditConfigAuditLogConfigs <a name="DataGoogleIamPolicyAuditConfigAuditLogConfigs" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs(
  log_type: str,
  exempted_members: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs.property.logType">log_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#log_type DataGoogleIamPolicy#log_type}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs.property.exemptedMembers">exempted_members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#exempted_members DataGoogleIamPolicy#exempted_members}. |

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs.property.logType"></a>

```python
log_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#log_type DataGoogleIamPolicy#log_type}.

---

##### `exempted_members`<sup>Optional</sup> <a name="exempted_members" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs.property.exemptedMembers"></a>

```python
exempted_members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#exempted_members DataGoogleIamPolicy#exempted_members}.

---

### DataGoogleIamPolicyBinding <a name="DataGoogleIamPolicyBinding" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicyBinding(
  members: typing.List[str],
  role: str,
  condition: DataGoogleIamPolicyBindingCondition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#members DataGoogleIamPolicy#members}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#role DataGoogleIamPolicy#role}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition">DataGoogleIamPolicyBindingCondition</a></code> | condition block. |

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#members DataGoogleIamPolicy#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#role DataGoogleIamPolicy#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding.property.condition"></a>

```python
condition: DataGoogleIamPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition">DataGoogleIamPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#condition DataGoogleIamPolicy#condition}

---

### DataGoogleIamPolicyBindingCondition <a name="DataGoogleIamPolicyBindingCondition" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#expression DataGoogleIamPolicy#expression}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#title DataGoogleIamPolicy#title}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#description DataGoogleIamPolicy#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#expression DataGoogleIamPolicy#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#title DataGoogleIamPolicy#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#description DataGoogleIamPolicy#description}.

---

### DataGoogleIamPolicyConfig <a name="DataGoogleIamPolicyConfig" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audit_config: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyAuditConfig]] = None,
  binding: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyBinding]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.auditConfig">audit_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig">DataGoogleIamPolicyAuditConfig</a>]]</code> | audit_config block. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.binding">binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding">DataGoogleIamPolicyBinding</a>]]</code> | binding block. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#id DataGoogleIamPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_config`<sup>Optional</sup> <a name="audit_config" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.auditConfig"></a>

```python
audit_config: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyAuditConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig">DataGoogleIamPolicyAuditConfig</a>]]

audit_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#audit_config DataGoogleIamPolicy#audit_config}

---

##### `binding`<sup>Optional</sup> <a name="binding" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.binding"></a>

```python
binding: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding">DataGoogleIamPolicyBinding</a>]]

binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#binding DataGoogleIamPolicy#binding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#id DataGoogleIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamPolicyAuditConfigAuditLogConfigsList <a name="DataGoogleIamPolicyAuditConfigAuditLogConfigsList" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs">DataGoogleIamPolicyAuditConfigAuditLogConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyAuditConfigAuditLogConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs">DataGoogleIamPolicyAuditConfigAuditLogConfigs</a>]]

---


### DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference <a name="DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.resetExemptedMembers">reset_exempted_members</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exempted_members` <a name="reset_exempted_members" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.resetExemptedMembers"></a>

```python
def reset_exempted_members() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.exemptedMembersInput">exempted_members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.logTypeInput">log_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.exemptedMembers">exempted_members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs">DataGoogleIamPolicyAuditConfigAuditLogConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exempted_members_input`<sup>Optional</sup> <a name="exempted_members_input" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.exemptedMembersInput"></a>

```python
exempted_members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_type_input`<sup>Optional</sup> <a name="log_type_input" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.logTypeInput"></a>

```python
log_type_input: str
```

- *Type:* str

---

##### `exempted_members`<sup>Required</sup> <a name="exempted_members" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.exemptedMembers"></a>

```python
exempted_members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataGoogleIamPolicyAuditConfigAuditLogConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs">DataGoogleIamPolicyAuditConfigAuditLogConfigs</a>]

---


### DataGoogleIamPolicyAuditConfigList <a name="DataGoogleIamPolicyAuditConfigList" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleIamPolicyAuditConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig">DataGoogleIamPolicyAuditConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyAuditConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig">DataGoogleIamPolicyAuditConfig</a>]]

---


### DataGoogleIamPolicyAuditConfigOutputReference <a name="DataGoogleIamPolicyAuditConfigOutputReference" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.putAuditLogConfigs">put_audit_log_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audit_log_configs` <a name="put_audit_log_configs" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.putAuditLogConfigs"></a>

```python
def put_audit_log_configs(
  value: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyAuditConfigAuditLogConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.putAuditLogConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs">DataGoogleIamPolicyAuditConfigAuditLogConfigs</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.auditLogConfigs">audit_log_configs</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList">DataGoogleIamPolicyAuditConfigAuditLogConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.auditLogConfigsInput">audit_log_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs">DataGoogleIamPolicyAuditConfigAuditLogConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig">DataGoogleIamPolicyAuditConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audit_log_configs`<sup>Required</sup> <a name="audit_log_configs" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.auditLogConfigs"></a>

```python
audit_log_configs: DataGoogleIamPolicyAuditConfigAuditLogConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList">DataGoogleIamPolicyAuditConfigAuditLogConfigsList</a>

---

##### `audit_log_configs_input`<sup>Optional</sup> <a name="audit_log_configs_input" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.auditLogConfigsInput"></a>

```python
audit_log_configs_input: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyAuditConfigAuditLogConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs">DataGoogleIamPolicyAuditConfigAuditLogConfigs</a>]]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataGoogleIamPolicyAuditConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig">DataGoogleIamPolicyAuditConfig</a>]

---


### DataGoogleIamPolicyBindingConditionOutputReference <a name="DataGoogleIamPolicyBindingConditionOutputReference" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition">DataGoogleIamPolicyBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleIamPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition">DataGoogleIamPolicyBindingCondition</a>

---


### DataGoogleIamPolicyBindingList <a name="DataGoogleIamPolicyBindingList" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicyBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleIamPolicyBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding">DataGoogleIamPolicyBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataGoogleIamPolicyBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding">DataGoogleIamPolicyBinding</a>]]

---


### DataGoogleIamPolicyBindingOutputReference <a name="DataGoogleIamPolicyBindingOutputReference" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iam_policy

dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.resetCondition">reset_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#expression DataGoogleIamPolicy#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#title DataGoogleIamPolicy#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/iam_policy#description DataGoogleIamPolicy#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference">DataGoogleIamPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition">DataGoogleIamPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding">DataGoogleIamPolicyBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.condition"></a>

```python
condition: DataGoogleIamPolicyBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference">DataGoogleIamPolicyBindingConditionOutputReference</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.conditionInput"></a>

```python
condition_input: DataGoogleIamPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition">DataGoogleIamPolicyBindingCondition</a>

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataGoogleIamPolicyBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding">DataGoogleIamPolicyBinding</a>]

---



