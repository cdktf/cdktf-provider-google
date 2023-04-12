# `kmsCryptoKeyIamBinding` Submodule <a name="`kmsCryptoKeyIamBinding` Submodule" id="@cdktf/provider-google.kmsCryptoKeyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsCryptoKeyIamBinding <a name="KmsCryptoKeyIamBinding" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding google_kms_crypto_key_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmscryptokeyiambinding"

kmscryptokeyiambinding.NewKmsCryptoKeyIamBinding(scope Construct, id *string, config KmsCryptoKeyIamBindingConfig) KmsCryptoKeyIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig">KmsCryptoKeyIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig">KmsCryptoKeyIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.putCondition"></a>

```go
func PutCondition(value KmsCryptoKeyIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingCondition">KmsCryptoKeyIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmscryptokeyiambinding"

kmscryptokeyiambinding.KmsCryptoKeyIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmscryptokeyiambinding"

kmscryptokeyiambinding.KmsCryptoKeyIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmscryptokeyiambinding"

kmscryptokeyiambinding.KmsCryptoKeyIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference">KmsCryptoKeyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingCondition">KmsCryptoKeyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.cryptoKeyIdInput">CryptoKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.cryptoKeyId">CryptoKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.condition"></a>

```go
func Condition() KmsCryptoKeyIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference">KmsCryptoKeyIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.conditionInput"></a>

```go
func ConditionInput() KmsCryptoKeyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingCondition">KmsCryptoKeyIamBindingCondition</a>

---

##### `CryptoKeyIdInput`<sup>Optional</sup> <a name="CryptoKeyIdInput" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.cryptoKeyIdInput"></a>

```go
func CryptoKeyIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `CryptoKeyId`<sup>Required</sup> <a name="CryptoKeyId" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.cryptoKeyId"></a>

```go
func CryptoKeyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsCryptoKeyIamBindingCondition <a name="KmsCryptoKeyIamBindingCondition" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmscryptokeyiambinding"

&kmscryptokeyiambinding.KmsCryptoKeyIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding#expression KmsCryptoKeyIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding#title KmsCryptoKeyIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding#description KmsCryptoKeyIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding#expression KmsCryptoKeyIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding#title KmsCryptoKeyIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding#description KmsCryptoKeyIamBinding#description}.

---

### KmsCryptoKeyIamBindingConfig <a name="KmsCryptoKeyIamBindingConfig" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmscryptokeyiambinding"

&kmscryptokeyiambinding.KmsCryptoKeyIamBindingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CryptoKeyId: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.cryptoKeyId">CryptoKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding#crypto_key_id KmsCryptoKeyIamBinding#crypto_key_id}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding#members KmsCryptoKeyIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding#role KmsCryptoKeyIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingCondition">KmsCryptoKeyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding#id KmsCryptoKeyIamBinding#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CryptoKeyId`<sup>Required</sup> <a name="CryptoKeyId" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.cryptoKeyId"></a>

```go
CryptoKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding#crypto_key_id KmsCryptoKeyIamBinding#crypto_key_id}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding#members KmsCryptoKeyIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding#role KmsCryptoKeyIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.condition"></a>

```go
Condition KmsCryptoKeyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingCondition">KmsCryptoKeyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding#condition KmsCryptoKeyIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_crypto_key_iam_binding#id KmsCryptoKeyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsCryptoKeyIamBindingConditionOutputReference <a name="KmsCryptoKeyIamBindingConditionOutputReference" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/kmscryptokeyiambinding"

kmscryptokeyiambinding.NewKmsCryptoKeyIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsCryptoKeyIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingCondition">KmsCryptoKeyIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsCryptoKeyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyIamBinding.KmsCryptoKeyIamBindingCondition">KmsCryptoKeyIamBindingCondition</a>

---



