# `storageDefaultObjectAccessControl` Submodule <a name="`storageDefaultObjectAccessControl` Submodule" id="@cdktf/provider-google.storageDefaultObjectAccessControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageDefaultObjectAccessControl <a name="StorageDefaultObjectAccessControl" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control google_storage_default_object_access_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagedefaultobjectaccesscontrol"

storagedefaultobjectaccesscontrol.NewStorageDefaultObjectAccessControl(scope Construct, id *string, config StorageDefaultObjectAccessControlConfig) StorageDefaultObjectAccessControl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig">StorageDefaultObjectAccessControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig">StorageDefaultObjectAccessControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.putTimeouts"></a>

```go
func PutTimeouts(value StorageDefaultObjectAccessControlTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetId"></a>

```go
func ResetId()
```

##### `ResetObject` <a name="ResetObject" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetObject"></a>

```go
func ResetObject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagedefaultobjectaccesscontrol"

storagedefaultobjectaccesscontrol.StorageDefaultObjectAccessControl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagedefaultobjectaccesscontrol"

storagedefaultobjectaccesscontrol.StorageDefaultObjectAccessControl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagedefaultobjectaccesscontrol"

storagedefaultobjectaccesscontrol.StorageDefaultObjectAccessControl_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entityId">EntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.projectTeam">ProjectTeam</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList">StorageDefaultObjectAccessControlProjectTeamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference">StorageDefaultObjectAccessControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entityInput">EntityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entity">Entity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entityId"></a>

```go
func EntityId() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ProjectTeam`<sup>Required</sup> <a name="ProjectTeam" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.projectTeam"></a>

```go
func ProjectTeam() StorageDefaultObjectAccessControlProjectTeamList
```

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList">StorageDefaultObjectAccessControlProjectTeamList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.timeouts"></a>

```go
func Timeouts() StorageDefaultObjectAccessControlTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference">StorageDefaultObjectAccessControlTimeoutsOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `EntityInput`<sup>Optional</sup> <a name="EntityInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entityInput"></a>

```go
func EntityInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Entity`<sup>Required</sup> <a name="Entity" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.entity"></a>

```go
func Entity() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageDefaultObjectAccessControlConfig <a name="StorageDefaultObjectAccessControlConfig" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagedefaultobjectaccesscontrol"

&storagedefaultobjectaccesscontrol.StorageDefaultObjectAccessControlConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Entity: *string,
	Role: *string,
	Id: *string,
	Object: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.bucket">Bucket</a></code> | <code>*string</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.entity">Entity</a></code> | <code>*string</code> | The entity holding the permission, in one of the following forms: user-{{userId}} user-{{email}} (such as "user-liz@example.com") group-{{groupId}} group-{{email}} (such as "group-example@googlegroups.com") domain-{{domain}} (such as "domain-example.com") project-team-{{projectId}} allUsers allAuthenticatedUsers. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.role">Role</a></code> | <code>*string</code> | The access permission for the entity. Possible values: ["OWNER", "READER"]. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control#id StorageDefaultObjectAccessControl#id}. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.object">Object</a></code> | <code>*string</code> | The name of the object, if applied to an object. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The name of the bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control#bucket StorageDefaultObjectAccessControl#bucket}

---

##### `Entity`<sup>Required</sup> <a name="Entity" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.entity"></a>

```go
Entity *string
```

- *Type:* *string

The entity holding the permission, in one of the following forms: user-{{userId}} user-{{email}} (such as "user-liz@example.com") group-{{groupId}} group-{{email}} (such as "group-example@googlegroups.com") domain-{{domain}} (such as "domain-example.com") project-team-{{projectId}} allUsers allAuthenticatedUsers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control#entity StorageDefaultObjectAccessControl#entity}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

The access permission for the entity. Possible values: ["OWNER", "READER"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control#role StorageDefaultObjectAccessControl#role}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control#id StorageDefaultObjectAccessControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.object"></a>

```go
Object *string
```

- *Type:* *string

The name of the object, if applied to an object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control#object StorageDefaultObjectAccessControl#object}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlConfig.property.timeouts"></a>

```go
Timeouts StorageDefaultObjectAccessControlTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts">StorageDefaultObjectAccessControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control#timeouts StorageDefaultObjectAccessControl#timeouts}

---

### StorageDefaultObjectAccessControlProjectTeam <a name="StorageDefaultObjectAccessControlProjectTeam" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeam.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagedefaultobjectaccesscontrol"

&storagedefaultobjectaccesscontrol.StorageDefaultObjectAccessControlProjectTeam {

}
```


### StorageDefaultObjectAccessControlTimeouts <a name="StorageDefaultObjectAccessControlTimeouts" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagedefaultobjectaccesscontrol"

&storagedefaultobjectaccesscontrol.StorageDefaultObjectAccessControlTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control#create StorageDefaultObjectAccessControl#create}. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control#delete StorageDefaultObjectAccessControl#delete}. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control#update StorageDefaultObjectAccessControl#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control#create StorageDefaultObjectAccessControl#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control#delete StorageDefaultObjectAccessControl#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/storage_default_object_access_control#update StorageDefaultObjectAccessControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageDefaultObjectAccessControlProjectTeamList <a name="StorageDefaultObjectAccessControlProjectTeamList" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagedefaultobjectaccesscontrol"

storagedefaultobjectaccesscontrol.NewStorageDefaultObjectAccessControlProjectTeamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageDefaultObjectAccessControlProjectTeamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.get"></a>

```go
func Get(index *f64) StorageDefaultObjectAccessControlProjectTeamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### StorageDefaultObjectAccessControlProjectTeamOutputReference <a name="StorageDefaultObjectAccessControlProjectTeamOutputReference" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagedefaultobjectaccesscontrol"

storagedefaultobjectaccesscontrol.NewStorageDefaultObjectAccessControlProjectTeamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageDefaultObjectAccessControlProjectTeamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.projectNumber">ProjectNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.team">Team</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeam">StorageDefaultObjectAccessControlProjectTeam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectNumber`<sup>Required</sup> <a name="ProjectNumber" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.projectNumber"></a>

```go
func ProjectNumber() *string
```

- *Type:* *string

---

##### `Team`<sup>Required</sup> <a name="Team" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.team"></a>

```go
func Team() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeamOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageDefaultObjectAccessControlProjectTeam
```

- *Type:* <a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlProjectTeam">StorageDefaultObjectAccessControlProjectTeam</a>

---


### StorageDefaultObjectAccessControlTimeoutsOutputReference <a name="StorageDefaultObjectAccessControlTimeoutsOutputReference" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/storagedefaultobjectaccesscontrol"

storagedefaultobjectaccesscontrol.NewStorageDefaultObjectAccessControlTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageDefaultObjectAccessControlTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageDefaultObjectAccessControl.StorageDefaultObjectAccessControlTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



