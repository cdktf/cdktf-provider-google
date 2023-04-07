# `binaryAuthorizationAttestorIamMember` Submodule <a name="`binaryAuthorizationAttestorIamMember` Submodule" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BinaryAuthorizationAttestorIamMember <a name="BinaryAuthorizationAttestorIamMember" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member google_binary_authorization_attestor_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestoriammember"

binaryauthorizationattestoriammember.NewBinaryAuthorizationAttestorIamMember(scope Construct, id *string, config BinaryAuthorizationAttestorIamMemberConfig) BinaryAuthorizationAttestorIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig">BinaryAuthorizationAttestorIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig">BinaryAuthorizationAttestorIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.putCondition"></a>

```go
func PutCondition(value BinaryAuthorizationAttestorIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition">BinaryAuthorizationAttestorIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestoriammember"

binaryauthorizationattestoriammember.BinaryAuthorizationAttestorIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestoriammember"

binaryauthorizationattestoriammember.BinaryAuthorizationAttestorIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestoriammember"

binaryauthorizationattestoriammember.BinaryAuthorizationAttestorIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference">BinaryAuthorizationAttestorIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.attestorInput">AttestorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition">BinaryAuthorizationAttestorIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.attestor">Attestor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.condition"></a>

```go
func Condition() BinaryAuthorizationAttestorIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference">BinaryAuthorizationAttestorIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `AttestorInput`<sup>Optional</sup> <a name="AttestorInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.attestorInput"></a>

```go
func AttestorInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.conditionInput"></a>

```go
func ConditionInput() BinaryAuthorizationAttestorIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition">BinaryAuthorizationAttestorIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Attestor`<sup>Required</sup> <a name="Attestor" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.attestor"></a>

```go
func Attestor() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BinaryAuthorizationAttestorIamMemberCondition <a name="BinaryAuthorizationAttestorIamMemberCondition" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestoriammember"

&binaryauthorizationattestoriammember.BinaryAuthorizationAttestorIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#expression BinaryAuthorizationAttestorIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#title BinaryAuthorizationAttestorIamMember#title}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#description BinaryAuthorizationAttestorIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#expression BinaryAuthorizationAttestorIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#title BinaryAuthorizationAttestorIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#description BinaryAuthorizationAttestorIamMember#description}.

---

### BinaryAuthorizationAttestorIamMemberConfig <a name="BinaryAuthorizationAttestorIamMemberConfig" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestoriammember"

&binaryauthorizationattestoriammember.BinaryAuthorizationAttestorIamMemberConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Attestor: *string,
	Member: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.attestor">Attestor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#attestor BinaryAuthorizationAttestorIamMember#attestor}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#member BinaryAuthorizationAttestorIamMember#member}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#role BinaryAuthorizationAttestorIamMember#role}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition">BinaryAuthorizationAttestorIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#id BinaryAuthorizationAttestorIamMember#id}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#project BinaryAuthorizationAttestorIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attestor`<sup>Required</sup> <a name="Attestor" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.attestor"></a>

```go
Attestor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#attestor BinaryAuthorizationAttestorIamMember#attestor}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#member BinaryAuthorizationAttestorIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#role BinaryAuthorizationAttestorIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.condition"></a>

```go
Condition BinaryAuthorizationAttestorIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition">BinaryAuthorizationAttestorIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#condition BinaryAuthorizationAttestorIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#id BinaryAuthorizationAttestorIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor_iam_member#project BinaryAuthorizationAttestorIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BinaryAuthorizationAttestorIamMemberConditionOutputReference <a name="BinaryAuthorizationAttestorIamMemberConditionOutputReference" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/binaryauthorizationattestoriammember"

binaryauthorizationattestoriammember.NewBinaryAuthorizationAttestorIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BinaryAuthorizationAttestorIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition">BinaryAuthorizationAttestorIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() BinaryAuthorizationAttestorIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationAttestorIamMember.BinaryAuthorizationAttestorIamMemberCondition">BinaryAuthorizationAttestorIamMemberCondition</a>

---



