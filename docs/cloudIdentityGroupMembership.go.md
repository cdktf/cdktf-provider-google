# `cloudIdentityGroupMembership` Submodule <a name="`cloudIdentityGroupMembership` Submodule" id="@cdktf/provider-google.cloudIdentityGroupMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudIdentityGroupMembership <a name="CloudIdentityGroupMembership" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership google_cloud_identity_group_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudidentitygroupmembership"

cloudidentitygroupmembership.NewCloudIdentityGroupMembership(scope Construct, id *string, config CloudIdentityGroupMembershipConfig) CloudIdentityGroupMembership
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig">CloudIdentityGroupMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig">CloudIdentityGroupMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putPreferredMemberKey">PutPreferredMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putRoles">PutRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetPreferredMemberKey">ResetPreferredMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPreferredMemberKey` <a name="PutPreferredMemberKey" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putPreferredMemberKey"></a>

```go
func PutPreferredMemberKey(value CloudIdentityGroupMembershipPreferredMemberKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putPreferredMemberKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a>

---

##### `PutRoles` <a name="PutRoles" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putRoles"></a>

```go
func PutRoles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putRoles.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putTimeouts"></a>

```go
func PutTimeouts(value CloudIdentityGroupMembershipTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetId"></a>

```go
func ResetId()
```

##### `ResetPreferredMemberKey` <a name="ResetPreferredMemberKey" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetPreferredMemberKey"></a>

```go
func ResetPreferredMemberKey()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudidentitygroupmembership"

cloudidentitygroupmembership.CloudIdentityGroupMembership_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudidentitygroupmembership"

cloudidentitygroupmembership.CloudIdentityGroupMembership_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudidentitygroupmembership"

cloudidentitygroupmembership.CloudIdentityGroupMembership_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.preferredMemberKey">PreferredMemberKey</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference">CloudIdentityGroupMembershipPreferredMemberKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList">CloudIdentityGroupMembershipRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference">CloudIdentityGroupMembershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.groupInput">GroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.preferredMemberKeyInput">PreferredMemberKeyInput</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.rolesInput">RolesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.group">Group</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PreferredMemberKey`<sup>Required</sup> <a name="PreferredMemberKey" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.preferredMemberKey"></a>

```go
func PreferredMemberKey() CloudIdentityGroupMembershipPreferredMemberKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference">CloudIdentityGroupMembershipPreferredMemberKeyOutputReference</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.roles"></a>

```go
func Roles() CloudIdentityGroupMembershipRolesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList">CloudIdentityGroupMembershipRolesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.timeouts"></a>

```go
func Timeouts() CloudIdentityGroupMembershipTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference">CloudIdentityGroupMembershipTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.groupInput"></a>

```go
func GroupInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PreferredMemberKeyInput`<sup>Optional</sup> <a name="PreferredMemberKeyInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.preferredMemberKeyInput"></a>

```go
func PreferredMemberKeyInput() CloudIdentityGroupMembershipPreferredMemberKey
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a>

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.rolesInput"></a>

```go
func RolesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembership.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudIdentityGroupMembershipConfig <a name="CloudIdentityGroupMembershipConfig" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudidentitygroupmembership"

&cloudidentitygroupmembership.CloudIdentityGroupMembershipConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Group: *string,
	Roles: interface{},
	Id: *string,
	PreferredMemberKey: github.com/cdktf/cdktf-provider-google-go/google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.group">Group</a></code> | <code>*string</code> | The name of the Group to create this membership in. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.roles">Roles</a></code> | <code>interface{}</code> | roles block. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership#id CloudIdentityGroupMembership#id}. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.preferredMemberKey">PreferredMemberKey</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a></code> | preferred_member_key block. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.group"></a>

```go
Group *string
```

- *Type:* *string

The name of the Group to create this membership in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership#group CloudIdentityGroupMembership#group}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.roles"></a>

```go
Roles interface{}
```

- *Type:* interface{}

roles block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership#roles CloudIdentityGroupMembership#roles}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership#id CloudIdentityGroupMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PreferredMemberKey`<sup>Optional</sup> <a name="PreferredMemberKey" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.preferredMemberKey"></a>

```go
PreferredMemberKey CloudIdentityGroupMembershipPreferredMemberKey
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a>

preferred_member_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership#preferred_member_key CloudIdentityGroupMembership#preferred_member_key}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipConfig.property.timeouts"></a>

```go
Timeouts CloudIdentityGroupMembershipTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts">CloudIdentityGroupMembershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership#timeouts CloudIdentityGroupMembership#timeouts}

---

### CloudIdentityGroupMembershipPreferredMemberKey <a name="CloudIdentityGroupMembershipPreferredMemberKey" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudidentitygroupmembership"

&cloudidentitygroupmembership.CloudIdentityGroupMembershipPreferredMemberKey {
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey.property.id">Id</a></code> | <code>*string</code> | The ID of the entity. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace in which the entity exists. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the entity.

For Google-managed entities, the id must be the email address of an existing
group or user.

For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.

Must be unique within a namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership#id CloudIdentityGroupMembership#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.

If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of 'identitysources/{identity_source_id}'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership#namespace CloudIdentityGroupMembership#namespace}

---

### CloudIdentityGroupMembershipRoles <a name="CloudIdentityGroupMembershipRoles" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudidentitygroupmembership"

&cloudidentitygroupmembership.CloudIdentityGroupMembershipRoles {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles.property.name">Name</a></code> | <code>*string</code> | The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER. Possible values: ["OWNER", "MANAGER", "MEMBER"]. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRoles.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER. Possible values: ["OWNER", "MANAGER", "MEMBER"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership#name CloudIdentityGroupMembership#name}

---

### CloudIdentityGroupMembershipTimeouts <a name="CloudIdentityGroupMembershipTimeouts" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudidentitygroupmembership"

&cloudidentitygroupmembership.CloudIdentityGroupMembershipTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership#create CloudIdentityGroupMembership#create}. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership#delete CloudIdentityGroupMembership#delete}. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership#update CloudIdentityGroupMembership#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership#create CloudIdentityGroupMembership#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership#delete CloudIdentityGroupMembership#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership#update CloudIdentityGroupMembership#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudIdentityGroupMembershipPreferredMemberKeyOutputReference <a name="CloudIdentityGroupMembershipPreferredMemberKeyOutputReference" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudidentitygroupmembership"

cloudidentitygroupmembership.NewCloudIdentityGroupMembershipPreferredMemberKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudIdentityGroupMembershipPreferredMemberKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudIdentityGroupMembershipPreferredMemberKey
```

- *Type:* <a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipPreferredMemberKey">CloudIdentityGroupMembershipPreferredMemberKey</a>

---


### CloudIdentityGroupMembershipRolesList <a name="CloudIdentityGroupMembershipRolesList" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudidentitygroupmembership"

cloudidentitygroupmembership.NewCloudIdentityGroupMembershipRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudIdentityGroupMembershipRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.get"></a>

```go
func Get(index *f64) CloudIdentityGroupMembershipRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudIdentityGroupMembershipRolesOutputReference <a name="CloudIdentityGroupMembershipRolesOutputReference" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudidentitygroupmembership"

cloudidentitygroupmembership.NewCloudIdentityGroupMembershipRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudIdentityGroupMembershipRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudIdentityGroupMembershipTimeoutsOutputReference <a name="CloudIdentityGroupMembershipTimeoutsOutputReference" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudidentitygroupmembership"

cloudidentitygroupmembership.NewCloudIdentityGroupMembershipTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudIdentityGroupMembershipTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudIdentityGroupMembership.CloudIdentityGroupMembershipTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



