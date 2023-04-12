# `sqlUser` Submodule <a name="`sqlUser` Submodule" id="@cdktf/provider-google.sqlUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlUser <a name="SqlUser" id="@cdktf/provider-google.sqlUser.SqlUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/sql_user google_sql_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlUser.SqlUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqluser"

sqluser.NewSqlUser(scope Construct, id *string, config SqlUserConfig) SqlUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig">SqlUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sqlUser.SqlUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlUser.SqlUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sqlUser.SqlUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserConfig">SqlUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.putPasswordPolicy">PutPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetPasswordPolicy">ResetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlUser.SqlUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sqlUser.SqlUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sqlUser.SqlUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlUser.SqlUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sqlUser.SqlUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sqlUser.SqlUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sqlUser.SqlUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sqlUser.SqlUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sqlUser.SqlUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPasswordPolicy` <a name="PutPasswordPolicy" id="@cdktf/provider-google.sqlUser.SqlUser.putPasswordPolicy"></a>

```go
func PutPasswordPolicy(value SqlUserPasswordPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlUser.SqlUser.putPasswordPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy">SqlUserPasswordPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.sqlUser.SqlUser.putTimeouts"></a>

```go
func PutTimeouts(value SqlUserTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlUser.SqlUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserTimeouts">SqlUserTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google.sqlUser.SqlUser.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google.sqlUser.SqlUser.resetHost"></a>

```go
func ResetHost()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sqlUser.SqlUser.resetId"></a>

```go
func ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-google.sqlUser.SqlUser.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="@cdktf/provider-google.sqlUser.SqlUser.resetPasswordPolicy"></a>

```go
func ResetPasswordPolicy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.sqlUser.SqlUser.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.sqlUser.SqlUser.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.sqlUser.SqlUser.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sqlUser.SqlUser.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqluser"

sqluser.SqlUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlUser.SqlUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sqlUser.SqlUser.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqluser"

sqluser.SqlUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlUser.SqlUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sqlUser.SqlUser.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqluser"

sqluser.SqlUser_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlUser.SqlUser.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.passwordPolicy">PasswordPolicy</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference">SqlUserPasswordPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.sqlServerUserDetails">SqlServerUserDetails</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList">SqlUserSqlServerUserDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference">SqlUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy">SqlUserPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sqlUser.SqlUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sqlUser.SqlUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlUser.SqlUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sqlUser.SqlUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sqlUser.SqlUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sqlUser.SqlUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sqlUser.SqlUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sqlUser.SqlUser.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sqlUser.SqlUser.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sqlUser.SqlUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sqlUser.SqlUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sqlUser.SqlUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sqlUser.SqlUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sqlUser.SqlUser.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="@cdktf/provider-google.sqlUser.SqlUser.property.passwordPolicy"></a>

```go
func PasswordPolicy() SqlUserPasswordPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference">SqlUserPasswordPolicyOutputReference</a>

---

##### `SqlServerUserDetails`<sup>Required</sup> <a name="SqlServerUserDetails" id="@cdktf/provider-google.sqlUser.SqlUser.property.sqlServerUserDetails"></a>

```go
func SqlServerUserDetails() SqlUserSqlServerUserDetailsList
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList">SqlUserSqlServerUserDetailsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.sqlUser.SqlUser.property.timeouts"></a>

```go
func Timeouts() SqlUserTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference">SqlUserTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.passwordPolicyInput"></a>

```go
func PasswordPolicyInput() SqlUserPasswordPolicy
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy">SqlUserPasswordPolicy</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.sqlUser.SqlUser.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.sqlUser.SqlUser.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sqlUser.SqlUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.sqlUser.SqlUser.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sqlUser.SqlUser.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.sqlUser.SqlUser.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.sqlUser.SqlUser.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.sqlUser.SqlUser.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sqlUser.SqlUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlUserConfig <a name="SqlUserConfig" id="@cdktf/provider-google.sqlUser.SqlUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlUser.SqlUserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqluser"

&sqluser.SqlUserConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Instance: *string,
	Name: *string,
	DeletionPolicy: *string,
	Host: *string,
	Id: *string,
	Password: *string,
	PasswordPolicy: github.com/cdktf/cdktf-provider-google-go/google.sqlUser.SqlUserPasswordPolicy,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.sqlUser.SqlUserTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.instance">Instance</a></code> | <code>*string</code> | The name of the Cloud SQL instance. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.name">Name</a></code> | <code>*string</code> | The name of the user. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | The deletion policy for the user. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.host">Host</a></code> | <code>*string</code> | The host the user can connect from. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#id SqlUser#id}. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.password">Password</a></code> | <code>*string</code> | The password for the user. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy">SqlUserPasswordPolicy</a></code> | password_policy block. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeouts">SqlUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.type">Type</a></code> | <code>*string</code> | The user type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The name of the Cloud SQL instance. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#instance SqlUser#instance}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the user. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#name SqlUser#name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

The deletion policy for the user.

Setting ABANDON allows the resource
to be abandoned rather than deleted. This is useful for Postgres, where users cannot be deleted from the API if they
have been granted SQL roles. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#deletion_policy SqlUser#deletion_policy}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

The host the user can connect from.

This is only supported for MySQL instances. Don't set this field for PostgreSQL instances. Can be an IP address. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#host SqlUser#host}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#id SqlUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password for the user.

Can be updated. For Postgres instances this is a Required field, unless type is set to
either CLOUD_IAM_USER or CLOUD_IAM_SERVICE_ACCOUNT.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#password SqlUser#password}

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.passwordPolicy"></a>

```go
PasswordPolicy SqlUserPasswordPolicy
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy">SqlUserPasswordPolicy</a>

password_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#password_policy SqlUser#password_policy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#project SqlUser#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.timeouts"></a>

```go
Timeouts SqlUserTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserTimeouts">SqlUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#timeouts SqlUser#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The user type.

It determines the method to authenticate the user during login.
The default is the database's built-in user type. Flags include "BUILT_IN", "CLOUD_IAM_USER", or "CLOUD_IAM_SERVICE_ACCOUNT".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#type SqlUser#type}

---

### SqlUserPasswordPolicy <a name="SqlUserPasswordPolicy" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqluser"

&sqluser.SqlUserPasswordPolicy {
	AllowedFailedAttempts: *f64,
	EnableFailedAttemptsCheck: interface{},
	EnablePasswordVerification: interface{},
	PasswordExpirationDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.property.allowedFailedAttempts">AllowedFailedAttempts</a></code> | <code>*f64</code> | Number of failed attempts allowed before the user get locked. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.property.enableFailedAttemptsCheck">EnableFailedAttemptsCheck</a></code> | <code>interface{}</code> | If true, the check that will lock user after too many failed login attempts will be enabled. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.property.enablePasswordVerification">EnablePasswordVerification</a></code> | <code>interface{}</code> | If true, the user must specify the current password before changing the password. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.property.passwordExpirationDuration">PasswordExpirationDuration</a></code> | <code>*string</code> | Password expiration duration with one week grace period. |

---

##### `AllowedFailedAttempts`<sup>Optional</sup> <a name="AllowedFailedAttempts" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.property.allowedFailedAttempts"></a>

```go
AllowedFailedAttempts *f64
```

- *Type:* *f64

Number of failed attempts allowed before the user get locked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#allowed_failed_attempts SqlUser#allowed_failed_attempts}

---

##### `EnableFailedAttemptsCheck`<sup>Optional</sup> <a name="EnableFailedAttemptsCheck" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.property.enableFailedAttemptsCheck"></a>

```go
EnableFailedAttemptsCheck interface{}
```

- *Type:* interface{}

If true, the check that will lock user after too many failed login attempts will be enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#enable_failed_attempts_check SqlUser#enable_failed_attempts_check}

---

##### `EnablePasswordVerification`<sup>Optional</sup> <a name="EnablePasswordVerification" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.property.enablePasswordVerification"></a>

```go
EnablePasswordVerification interface{}
```

- *Type:* interface{}

If true, the user must specify the current password before changing the password.

This flag is supported only for MySQL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#enable_password_verification SqlUser#enable_password_verification}

---

##### `PasswordExpirationDuration`<sup>Optional</sup> <a name="PasswordExpirationDuration" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.property.passwordExpirationDuration"></a>

```go
PasswordExpirationDuration *string
```

- *Type:* *string

Password expiration duration with one week grace period.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#password_expiration_duration SqlUser#password_expiration_duration}

---

### SqlUserPasswordPolicyStatus <a name="SqlUserPasswordPolicyStatus" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqluser"

&sqluser.SqlUserPasswordPolicyStatus {

}
```


### SqlUserSqlServerUserDetails <a name="SqlUserSqlServerUserDetails" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqluser"

&sqluser.SqlUserSqlServerUserDetails {

}
```


### SqlUserTimeouts <a name="SqlUserTimeouts" id="@cdktf/provider-google.sqlUser.SqlUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlUser.SqlUserTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqluser"

&sqluser.SqlUserTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#create SqlUser#create}. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#delete SqlUser#delete}. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#update SqlUser#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.sqlUser.SqlUserTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#create SqlUser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.sqlUser.SqlUserTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#delete SqlUser#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.sqlUser.SqlUserTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#update SqlUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlUserPasswordPolicyOutputReference <a name="SqlUserPasswordPolicyOutputReference" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqluser"

sqluser.NewSqlUserPasswordPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlUserPasswordPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resetAllowedFailedAttempts">ResetAllowedFailedAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resetEnableFailedAttemptsCheck">ResetEnableFailedAttemptsCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resetEnablePasswordVerification">ResetEnablePasswordVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resetPasswordExpirationDuration">ResetPasswordExpirationDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedFailedAttempts` <a name="ResetAllowedFailedAttempts" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resetAllowedFailedAttempts"></a>

```go
func ResetAllowedFailedAttempts()
```

##### `ResetEnableFailedAttemptsCheck` <a name="ResetEnableFailedAttemptsCheck" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resetEnableFailedAttemptsCheck"></a>

```go
func ResetEnableFailedAttemptsCheck()
```

##### `ResetEnablePasswordVerification` <a name="ResetEnablePasswordVerification" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resetEnablePasswordVerification"></a>

```go
func ResetEnablePasswordVerification()
```

##### `ResetPasswordExpirationDuration` <a name="ResetPasswordExpirationDuration" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resetPasswordExpirationDuration"></a>

```go
func ResetPasswordExpirationDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList">SqlUserPasswordPolicyStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.allowedFailedAttemptsInput">AllowedFailedAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.enableFailedAttemptsCheckInput">EnableFailedAttemptsCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.enablePasswordVerificationInput">EnablePasswordVerificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.passwordExpirationDurationInput">PasswordExpirationDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.allowedFailedAttempts">AllowedFailedAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.enableFailedAttemptsCheck">EnableFailedAttemptsCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.enablePasswordVerification">EnablePasswordVerification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.passwordExpirationDuration">PasswordExpirationDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy">SqlUserPasswordPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.status"></a>

```go
func Status() SqlUserPasswordPolicyStatusList
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList">SqlUserPasswordPolicyStatusList</a>

---

##### `AllowedFailedAttemptsInput`<sup>Optional</sup> <a name="AllowedFailedAttemptsInput" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.allowedFailedAttemptsInput"></a>

```go
func AllowedFailedAttemptsInput() *f64
```

- *Type:* *f64

---

##### `EnableFailedAttemptsCheckInput`<sup>Optional</sup> <a name="EnableFailedAttemptsCheckInput" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.enableFailedAttemptsCheckInput"></a>

```go
func EnableFailedAttemptsCheckInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePasswordVerificationInput`<sup>Optional</sup> <a name="EnablePasswordVerificationInput" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.enablePasswordVerificationInput"></a>

```go
func EnablePasswordVerificationInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordExpirationDurationInput`<sup>Optional</sup> <a name="PasswordExpirationDurationInput" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.passwordExpirationDurationInput"></a>

```go
func PasswordExpirationDurationInput() *string
```

- *Type:* *string

---

##### `AllowedFailedAttempts`<sup>Required</sup> <a name="AllowedFailedAttempts" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.allowedFailedAttempts"></a>

```go
func AllowedFailedAttempts() *f64
```

- *Type:* *f64

---

##### `EnableFailedAttemptsCheck`<sup>Required</sup> <a name="EnableFailedAttemptsCheck" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.enableFailedAttemptsCheck"></a>

```go
func EnableFailedAttemptsCheck() interface{}
```

- *Type:* interface{}

---

##### `EnablePasswordVerification`<sup>Required</sup> <a name="EnablePasswordVerification" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.enablePasswordVerification"></a>

```go
func EnablePasswordVerification() interface{}
```

- *Type:* interface{}

---

##### `PasswordExpirationDuration`<sup>Required</sup> <a name="PasswordExpirationDuration" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.passwordExpirationDuration"></a>

```go
func PasswordExpirationDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlUserPasswordPolicy
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy">SqlUserPasswordPolicy</a>

---


### SqlUserPasswordPolicyStatusList <a name="SqlUserPasswordPolicyStatusList" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqluser"

sqluser.NewSqlUserPasswordPolicyStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SqlUserPasswordPolicyStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.get"></a>

```go
func Get(index *f64) SqlUserPasswordPolicyStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SqlUserPasswordPolicyStatusOutputReference <a name="SqlUserPasswordPolicyStatusOutputReference" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqluser"

sqluser.NewSqlUserPasswordPolicyStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SqlUserPasswordPolicyStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.locked">Locked</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.passwordExpirationTime">PasswordExpirationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatus">SqlUserPasswordPolicyStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.locked"></a>

```go
func Locked() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PasswordExpirationTime`<sup>Required</sup> <a name="PasswordExpirationTime" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.passwordExpirationTime"></a>

```go
func PasswordExpirationTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlUserPasswordPolicyStatus
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatus">SqlUserPasswordPolicyStatus</a>

---


### SqlUserSqlServerUserDetailsList <a name="SqlUserSqlServerUserDetailsList" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqluser"

sqluser.NewSqlUserSqlServerUserDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SqlUserSqlServerUserDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.get"></a>

```go
func Get(index *f64) SqlUserSqlServerUserDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SqlUserSqlServerUserDetailsOutputReference <a name="SqlUserSqlServerUserDetailsOutputReference" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqluser"

sqluser.NewSqlUserSqlServerUserDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SqlUserSqlServerUserDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.disabled">Disabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.serverRoles">ServerRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetails">SqlUserSqlServerUserDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ServerRoles`<sup>Required</sup> <a name="ServerRoles" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.serverRoles"></a>

```go
func ServerRoles() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlUserSqlServerUserDetails
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetails">SqlUserSqlServerUserDetails</a>

---


### SqlUserTimeoutsOutputReference <a name="SqlUserTimeoutsOutputReference" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/sqluser"

sqluser.NewSqlUserTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlUserTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



