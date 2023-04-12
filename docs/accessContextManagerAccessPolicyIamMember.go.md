# `accessContextManagerAccessPolicyIamMember` Submodule <a name="`accessContextManagerAccessPolicyIamMember` Submodule" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerAccessPolicyIamMember <a name="AccessContextManagerAccessPolicyIamMember" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_member google_access_context_manager_access_policy_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesspolicyiammember"

accesscontextmanageraccesspolicyiammember.NewAccessContextManagerAccessPolicyIamMember(scope Construct, id *string, config AccessContextManagerAccessPolicyIamMemberConfig) AccessContextManagerAccessPolicyIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig">AccessContextManagerAccessPolicyIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig">AccessContextManagerAccessPolicyIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.putCondition"></a>

```go
func PutCondition(value AccessContextManagerAccessPolicyIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition">AccessContextManagerAccessPolicyIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesspolicyiammember"

accesscontextmanageraccesspolicyiammember.AccessContextManagerAccessPolicyIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesspolicyiammember"

accesscontextmanageraccesspolicyiammember.AccessContextManagerAccessPolicyIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesspolicyiammember"

accesscontextmanageraccesspolicyiammember.AccessContextManagerAccessPolicyIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference">AccessContextManagerAccessPolicyIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition">AccessContextManagerAccessPolicyIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.condition"></a>

```go
func Condition() AccessContextManagerAccessPolicyIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference">AccessContextManagerAccessPolicyIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.conditionInput"></a>

```go
func ConditionInput() AccessContextManagerAccessPolicyIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition">AccessContextManagerAccessPolicyIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerAccessPolicyIamMemberCondition <a name="AccessContextManagerAccessPolicyIamMemberCondition" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesspolicyiammember"

&accesscontextmanageraccesspolicyiammember.AccessContextManagerAccessPolicyIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_member#expression AccessContextManagerAccessPolicyIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_member#title AccessContextManagerAccessPolicyIamMember#title}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_member#description AccessContextManagerAccessPolicyIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_member#expression AccessContextManagerAccessPolicyIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_member#title AccessContextManagerAccessPolicyIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_member#description AccessContextManagerAccessPolicyIamMember#description}.

---

### AccessContextManagerAccessPolicyIamMemberConfig <a name="AccessContextManagerAccessPolicyIamMemberConfig" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesspolicyiammember"

&accesscontextmanageraccesspolicyiammember.AccessContextManagerAccessPolicyIamMemberConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Member: *string,
	Name: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_member#member AccessContextManagerAccessPolicyIamMember#member}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_member#name AccessContextManagerAccessPolicyIamMember#name}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_member#role AccessContextManagerAccessPolicyIamMember#role}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition">AccessContextManagerAccessPolicyIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_member#id AccessContextManagerAccessPolicyIamMember#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_member#member AccessContextManagerAccessPolicyIamMember#member}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_member#name AccessContextManagerAccessPolicyIamMember#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_member#role AccessContextManagerAccessPolicyIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.condition"></a>

```go
Condition AccessContextManagerAccessPolicyIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition">AccessContextManagerAccessPolicyIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_member#condition AccessContextManagerAccessPolicyIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_member#id AccessContextManagerAccessPolicyIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerAccessPolicyIamMemberConditionOutputReference <a name="AccessContextManagerAccessPolicyIamMemberConditionOutputReference" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesspolicyiammember"

accesscontextmanageraccesspolicyiammember.NewAccessContextManagerAccessPolicyIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessContextManagerAccessPolicyIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition">AccessContextManagerAccessPolicyIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessContextManagerAccessPolicyIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamMember.AccessContextManagerAccessPolicyIamMemberCondition">AccessContextManagerAccessPolicyIamMemberCondition</a>

---



