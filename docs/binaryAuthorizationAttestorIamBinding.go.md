# `binaryAuthorizationAttestorIamBinding` Submodule <a name="`binaryAuthorizationAttestorIamBinding` Submodule" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BinaryAuthorizationAttestorIamBinding <a name="BinaryAuthorizationAttestorIamBinding" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding google_binary_authorization_attestor_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestoriambinding"

binaryauthorizationattestoriambinding.NewBinaryAuthorizationAttestorIamBinding(scope Construct, id *string, config BinaryAuthorizationAttestorIamBindingConfig) BinaryAuthorizationAttestorIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig">BinaryAuthorizationAttestorIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig">BinaryAuthorizationAttestorIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.putCondition"></a>

```go
func PutCondition(value BinaryAuthorizationAttestorIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingCondition">BinaryAuthorizationAttestorIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestoriambinding"

binaryauthorizationattestoriambinding.BinaryAuthorizationAttestorIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestoriambinding"

binaryauthorizationattestoriambinding.BinaryAuthorizationAttestorIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestoriambinding"

binaryauthorizationattestoriambinding.BinaryAuthorizationAttestorIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference">BinaryAuthorizationAttestorIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.attestorInput">AttestorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingCondition">BinaryAuthorizationAttestorIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.attestor">Attestor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.condition"></a>

```go
func Condition() BinaryAuthorizationAttestorIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference">BinaryAuthorizationAttestorIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `AttestorInput`<sup>Optional</sup> <a name="AttestorInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.attestorInput"></a>

```go
func AttestorInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.conditionInput"></a>

```go
func ConditionInput() BinaryAuthorizationAttestorIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingCondition">BinaryAuthorizationAttestorIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Attestor`<sup>Required</sup> <a name="Attestor" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.attestor"></a>

```go
func Attestor() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BinaryAuthorizationAttestorIamBindingCondition <a name="BinaryAuthorizationAttestorIamBindingCondition" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestoriambinding"

&binaryauthorizationattestoriambinding.BinaryAuthorizationAttestorIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#expression BinaryAuthorizationAttestorIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#title BinaryAuthorizationAttestorIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#description BinaryAuthorizationAttestorIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#expression BinaryAuthorizationAttestorIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#title BinaryAuthorizationAttestorIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#description BinaryAuthorizationAttestorIamBinding#description}.

---

### BinaryAuthorizationAttestorIamBindingConfig <a name="BinaryAuthorizationAttestorIamBindingConfig" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestoriambinding"

&binaryauthorizationattestoriambinding.BinaryAuthorizationAttestorIamBindingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Attestor: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingCondition,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.attestor">Attestor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#attestor BinaryAuthorizationAttestorIamBinding#attestor}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#members BinaryAuthorizationAttestorIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#role BinaryAuthorizationAttestorIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingCondition">BinaryAuthorizationAttestorIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#id BinaryAuthorizationAttestorIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#project BinaryAuthorizationAttestorIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attestor`<sup>Required</sup> <a name="Attestor" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.attestor"></a>

```go
Attestor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#attestor BinaryAuthorizationAttestorIamBinding#attestor}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#members BinaryAuthorizationAttestorIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#role BinaryAuthorizationAttestorIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.condition"></a>

```go
Condition BinaryAuthorizationAttestorIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingCondition">BinaryAuthorizationAttestorIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#condition BinaryAuthorizationAttestorIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#id BinaryAuthorizationAttestorIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_binding#project BinaryAuthorizationAttestorIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BinaryAuthorizationAttestorIamBindingConditionOutputReference <a name="BinaryAuthorizationAttestorIamBindingConditionOutputReference" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestoriambinding"

binaryauthorizationattestoriambinding.NewBinaryAuthorizationAttestorIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BinaryAuthorizationAttestorIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingCondition">BinaryAuthorizationAttestorIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() BinaryAuthorizationAttestorIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamBinding.BinaryAuthorizationAttestorIamBindingCondition">BinaryAuthorizationAttestorIamBindingCondition</a>

---



