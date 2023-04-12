# `accessContextManagerAccessPolicyIamBinding` Submodule <a name="`accessContextManagerAccessPolicyIamBinding` Submodule" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerAccessPolicyIamBinding <a name="AccessContextManagerAccessPolicyIamBinding" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_binding google_access_context_manager_access_policy_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesspolicyiambinding"

accesscontextmanageraccesspolicyiambinding.NewAccessContextManagerAccessPolicyIamBinding(scope Construct, id *string, config AccessContextManagerAccessPolicyIamBindingConfig) AccessContextManagerAccessPolicyIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig">AccessContextManagerAccessPolicyIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig">AccessContextManagerAccessPolicyIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.putCondition"></a>

```go
func PutCondition(value AccessContextManagerAccessPolicyIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingCondition">AccessContextManagerAccessPolicyIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesspolicyiambinding"

accesscontextmanageraccesspolicyiambinding.AccessContextManagerAccessPolicyIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesspolicyiambinding"

accesscontextmanageraccesspolicyiambinding.AccessContextManagerAccessPolicyIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesspolicyiambinding"

accesscontextmanageraccesspolicyiambinding.AccessContextManagerAccessPolicyIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference">AccessContextManagerAccessPolicyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingCondition">AccessContextManagerAccessPolicyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.condition"></a>

```go
func Condition() AccessContextManagerAccessPolicyIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference">AccessContextManagerAccessPolicyIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.conditionInput"></a>

```go
func ConditionInput() AccessContextManagerAccessPolicyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingCondition">AccessContextManagerAccessPolicyIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerAccessPolicyIamBindingCondition <a name="AccessContextManagerAccessPolicyIamBindingCondition" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesspolicyiambinding"

&accesscontextmanageraccesspolicyiambinding.AccessContextManagerAccessPolicyIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_binding#expression AccessContextManagerAccessPolicyIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_binding#title AccessContextManagerAccessPolicyIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_binding#description AccessContextManagerAccessPolicyIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_binding#expression AccessContextManagerAccessPolicyIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_binding#title AccessContextManagerAccessPolicyIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_binding#description AccessContextManagerAccessPolicyIamBinding#description}.

---

### AccessContextManagerAccessPolicyIamBindingConfig <a name="AccessContextManagerAccessPolicyIamBindingConfig" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesspolicyiambinding"

&accesscontextmanageraccesspolicyiambinding.AccessContextManagerAccessPolicyIamBindingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Members: *[]*string,
	Name: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_binding#members AccessContextManagerAccessPolicyIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_binding#name AccessContextManagerAccessPolicyIamBinding#name}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_binding#role AccessContextManagerAccessPolicyIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingCondition">AccessContextManagerAccessPolicyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_binding#id AccessContextManagerAccessPolicyIamBinding#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_binding#members AccessContextManagerAccessPolicyIamBinding#members}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_binding#name AccessContextManagerAccessPolicyIamBinding#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_binding#role AccessContextManagerAccessPolicyIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.condition"></a>

```go
Condition AccessContextManagerAccessPolicyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingCondition">AccessContextManagerAccessPolicyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_binding#condition AccessContextManagerAccessPolicyIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_policy_iam_binding#id AccessContextManagerAccessPolicyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerAccessPolicyIamBindingConditionOutputReference <a name="AccessContextManagerAccessPolicyIamBindingConditionOutputReference" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanageraccesspolicyiambinding"

accesscontextmanageraccesspolicyiambinding.NewAccessContextManagerAccessPolicyIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessContextManagerAccessPolicyIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingCondition">AccessContextManagerAccessPolicyIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() AccessContextManagerAccessPolicyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessPolicyIamBinding.AccessContextManagerAccessPolicyIamBindingCondition">AccessContextManagerAccessPolicyIamBindingCondition</a>

---



