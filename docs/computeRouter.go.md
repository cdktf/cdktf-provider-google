# `computeRouter` Submodule <a name="`computeRouter` Submodule" id="@cdktf/provider-google.computeRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRouter <a name="ComputeRouter" id="@cdktf/provider-google.computeRouter.ComputeRouter"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_router google_compute_router}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouter"

computerouter.NewComputeRouter(scope Construct, id *string, config ComputeRouterConfig) ComputeRouter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig">ComputeRouterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRouter.ComputeRouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig">ComputeRouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.putBgp">PutBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.resetBgp">ResetBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.resetEncryptedInterconnectRouter">ResetEncryptedInterconnectRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouter.ComputeRouter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRouter.ComputeRouter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRouter.ComputeRouter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouter.ComputeRouter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRouter.ComputeRouter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRouter.ComputeRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRouter.ComputeRouter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRouter.ComputeRouter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRouter.ComputeRouter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBgp` <a name="PutBgp" id="@cdktf/provider-google.computeRouter.ComputeRouter.putBgp"></a>

```go
func PutBgp(value ComputeRouterBgp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouter.ComputeRouter.putBgp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp">ComputeRouterBgp</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRouter.ComputeRouter.putTimeouts"></a>

```go
func PutTimeouts(value ComputeRouterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouter.ComputeRouter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts">ComputeRouterTimeouts</a>

---

##### `ResetBgp` <a name="ResetBgp" id="@cdktf/provider-google.computeRouter.ComputeRouter.resetBgp"></a>

```go
func ResetBgp()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRouter.ComputeRouter.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptedInterconnectRouter` <a name="ResetEncryptedInterconnectRouter" id="@cdktf/provider-google.computeRouter.ComputeRouter.resetEncryptedInterconnectRouter"></a>

```go
func ResetEncryptedInterconnectRouter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRouter.ComputeRouter.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRouter.ComputeRouter.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRouter.ComputeRouter.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRouter.ComputeRouter.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRouter.ComputeRouter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouter"

computerouter.ComputeRouter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouter.ComputeRouter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRouter.ComputeRouter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouter"

computerouter.ComputeRouter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouter.ComputeRouter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRouter.ComputeRouter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouter"

computerouter.ComputeRouter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouter.ComputeRouter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.bgp">Bgp</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference">ComputeRouterBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference">ComputeRouterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.bgpInput">BgpInput</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp">ComputeRouterBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.encryptedInterconnectRouterInput">EncryptedInterconnectRouterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.encryptedInterconnectRouter">EncryptedInterconnectRouter</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bgp`<sup>Required</sup> <a name="Bgp" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.bgp"></a>

```go
func Bgp() ComputeRouterBgpOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference">ComputeRouterBgpOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.timeouts"></a>

```go
func Timeouts() ComputeRouterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference">ComputeRouterTimeoutsOutputReference</a>

---

##### `BgpInput`<sup>Optional</sup> <a name="BgpInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.bgpInput"></a>

```go
func BgpInput() ComputeRouterBgp
```

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp">ComputeRouterBgp</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EncryptedInterconnectRouterInput`<sup>Optional</sup> <a name="EncryptedInterconnectRouterInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.encryptedInterconnectRouterInput"></a>

```go
func EncryptedInterconnectRouterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EncryptedInterconnectRouter`<sup>Required</sup> <a name="EncryptedInterconnectRouter" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.encryptedInterconnectRouter"></a>

```go
func EncryptedInterconnectRouter() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRouter.ComputeRouter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouterBgp <a name="ComputeRouterBgp" id="@cdktf/provider-google.computeRouter.ComputeRouterBgp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouter.ComputeRouterBgp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouter"

&computerouter.ComputeRouterBgp {
	Asn: *f64,
	AdvertisedGroups: *[]*string,
	AdvertisedIpRanges: interface{},
	AdvertiseMode: *string,
	KeepaliveInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.asn">Asn</a></code> | <code>*f64</code> | Local BGP Autonomous System Number (ASN). |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.advertisedGroups">AdvertisedGroups</a></code> | <code>*[]*string</code> | User-specified list of prefix groups to advertise in custom mode. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.advertisedIpRanges">AdvertisedIpRanges</a></code> | <code>interface{}</code> | advertised_ip_ranges block. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.advertiseMode">AdvertiseMode</a></code> | <code>*string</code> | User-specified flag to indicate which mode to use for advertisement. Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"]. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.keepaliveInterval">KeepaliveInterval</a></code> | <code>*f64</code> | The interval in seconds between BGP keepalive messages that are sent to the peer. |

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.asn"></a>

```go
Asn *f64
```

- *Type:* *f64

Local BGP Autonomous System Number (ASN).

Must be an RFC6996
private ASN, either 16-bit or 32-bit. The value will be fixed for
this router resource. All VPN tunnels that link to this router
will have the same local ASN.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#asn ComputeRouter#asn}

---

##### `AdvertisedGroups`<sup>Optional</sup> <a name="AdvertisedGroups" id="@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.advertisedGroups"></a>

```go
AdvertisedGroups *[]*string
```

- *Type:* *[]*string

User-specified list of prefix groups to advertise in custom mode.

This field can only be populated if advertiseMode is CUSTOM and
is advertised to all peers of the router. These groups will be
advertised in addition to any specified prefixes. Leave this field
blank to advertise no custom groups.

This enum field has the one valid value: ALL_SUBNETS

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#advertised_groups ComputeRouter#advertised_groups}

---

##### `AdvertisedIpRanges`<sup>Optional</sup> <a name="AdvertisedIpRanges" id="@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.advertisedIpRanges"></a>

```go
AdvertisedIpRanges interface{}
```

- *Type:* interface{}

advertised_ip_ranges block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#advertised_ip_ranges ComputeRouter#advertised_ip_ranges}

---

##### `AdvertiseMode`<sup>Optional</sup> <a name="AdvertiseMode" id="@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.advertiseMode"></a>

```go
AdvertiseMode *string
```

- *Type:* *string

User-specified flag to indicate which mode to use for advertisement. Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#advertise_mode ComputeRouter#advertise_mode}

---

##### `KeepaliveInterval`<sup>Optional</sup> <a name="KeepaliveInterval" id="@cdktf/provider-google.computeRouter.ComputeRouterBgp.property.keepaliveInterval"></a>

```go
KeepaliveInterval *f64
```

- *Type:* *f64

The interval in seconds between BGP keepalive messages that are sent to the peer.

Hold time is three times the interval at which keepalive
messages are sent, and the hold time is the maximum number of seconds
allowed to elapse between successive keepalive messages that BGP
receives from a peer.

BGP will use the smaller of either the local hold time value or the
peer's hold time value as the hold time for the BGP connection
between the two peers. If set, this value must be between 20 and 60.
The default is 20.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#keepalive_interval ComputeRouter#keepalive_interval}

---

### ComputeRouterBgpAdvertisedIpRanges <a name="ComputeRouterBgpAdvertisedIpRanges" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouter"

&computerouter.ComputeRouterBgpAdvertisedIpRanges {
	Range: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges.property.range">Range</a></code> | <code>*string</code> | The IP range to advertise. The value must be a CIDR-formatted string. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges.property.description">Description</a></code> | <code>*string</code> | User-specified description for the IP range. |

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges.property.range"></a>

```go
Range *string
```

- *Type:* *string

The IP range to advertise. The value must be a CIDR-formatted string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#range ComputeRouter#range}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRanges.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-specified description for the IP range.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#description ComputeRouter#description}

---

### ComputeRouterConfig <a name="ComputeRouterConfig" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouter"

&computerouter.ComputeRouterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Network: *string,
	Bgp: github.com/cdktf/cdktf-provider-google-go/google.computeRouter.ComputeRouterBgp,
	Description: *string,
	EncryptedInterconnectRouter: interface{},
	Id: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeRouter.ComputeRouterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.network">Network</a></code> | <code>*string</code> | A reference to the network to which this router belongs. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.bgp">Bgp</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp">ComputeRouterBgp</a></code> | bgp block. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.encryptedInterconnectRouter">EncryptedInterconnectRouter</a></code> | <code>interface{}</code> | Indicates if a router is dedicated for use with encrypted VLAN attachments (interconnectAttachments). |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#id ComputeRouter#id}. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#project ComputeRouter#project}. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.region">Region</a></code> | <code>*string</code> | Region where the router resides. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts">ComputeRouterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#name ComputeRouter#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

A reference to the network to which this router belongs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#network ComputeRouter#network}

---

##### `Bgp`<sup>Optional</sup> <a name="Bgp" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.bgp"></a>

```go
Bgp ComputeRouterBgp
```

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp">ComputeRouterBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#bgp ComputeRouter#bgp}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#description ComputeRouter#description}

---

##### `EncryptedInterconnectRouter`<sup>Optional</sup> <a name="EncryptedInterconnectRouter" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.encryptedInterconnectRouter"></a>

```go
EncryptedInterconnectRouter interface{}
```

- *Type:* interface{}

Indicates if a router is dedicated for use with encrypted VLAN attachments (interconnectAttachments).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#encrypted_interconnect_router ComputeRouter#encrypted_interconnect_router}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#id ComputeRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#project ComputeRouter#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where the router resides.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#region ComputeRouter#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRouter.ComputeRouterConfig.property.timeouts"></a>

```go
Timeouts ComputeRouterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts">ComputeRouterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#timeouts ComputeRouter#timeouts}

---

### ComputeRouterTimeouts <a name="ComputeRouterTimeouts" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouter"

&computerouter.ComputeRouterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#create ComputeRouter#create}. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#delete ComputeRouter#delete}. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#update ComputeRouter#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#create ComputeRouter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#delete ComputeRouter#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router#update ComputeRouter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouterBgpAdvertisedIpRangesList <a name="ComputeRouterBgpAdvertisedIpRangesList" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouter"

computerouter.NewComputeRouterBgpAdvertisedIpRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRouterBgpAdvertisedIpRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.get"></a>

```go
func Get(index *f64) ComputeRouterBgpAdvertisedIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRouterBgpAdvertisedIpRangesOutputReference <a name="ComputeRouterBgpAdvertisedIpRangesOutputReference" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouter"

computerouter.NewComputeRouterBgpAdvertisedIpRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRouterBgpAdvertisedIpRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.rangeInput">RangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.range">Range</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.rangeInput"></a>

```go
func RangeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.range"></a>

```go
func Range() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRouterBgpOutputReference <a name="ComputeRouterBgpOutputReference" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouter"

computerouter.NewComputeRouterBgpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRouterBgpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.putAdvertisedIpRanges">PutAdvertisedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resetAdvertisedGroups">ResetAdvertisedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resetAdvertisedIpRanges">ResetAdvertisedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resetAdvertiseMode">ResetAdvertiseMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resetKeepaliveInterval">ResetKeepaliveInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvertisedIpRanges` <a name="PutAdvertisedIpRanges" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.putAdvertisedIpRanges"></a>

```go
func PutAdvertisedIpRanges(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.putAdvertisedIpRanges.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdvertisedGroups` <a name="ResetAdvertisedGroups" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resetAdvertisedGroups"></a>

```go
func ResetAdvertisedGroups()
```

##### `ResetAdvertisedIpRanges` <a name="ResetAdvertisedIpRanges" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resetAdvertisedIpRanges"></a>

```go
func ResetAdvertisedIpRanges()
```

##### `ResetAdvertiseMode` <a name="ResetAdvertiseMode" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resetAdvertiseMode"></a>

```go
func ResetAdvertiseMode()
```

##### `ResetKeepaliveInterval` <a name="ResetKeepaliveInterval" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.resetKeepaliveInterval"></a>

```go
func ResetKeepaliveInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertisedIpRanges">AdvertisedIpRanges</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList">ComputeRouterBgpAdvertisedIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertisedGroupsInput">AdvertisedGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertisedIpRangesInput">AdvertisedIpRangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertiseModeInput">AdvertiseModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.asnInput">AsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.keepaliveIntervalInput">KeepaliveIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertisedGroups">AdvertisedGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertiseMode">AdvertiseMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.asn">Asn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.keepaliveInterval">KeepaliveInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp">ComputeRouterBgp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvertisedIpRanges`<sup>Required</sup> <a name="AdvertisedIpRanges" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertisedIpRanges"></a>

```go
func AdvertisedIpRanges() ComputeRouterBgpAdvertisedIpRangesList
```

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgpAdvertisedIpRangesList">ComputeRouterBgpAdvertisedIpRangesList</a>

---

##### `AdvertisedGroupsInput`<sup>Optional</sup> <a name="AdvertisedGroupsInput" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertisedGroupsInput"></a>

```go
func AdvertisedGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdvertisedIpRangesInput`<sup>Optional</sup> <a name="AdvertisedIpRangesInput" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertisedIpRangesInput"></a>

```go
func AdvertisedIpRangesInput() interface{}
```

- *Type:* interface{}

---

##### `AdvertiseModeInput`<sup>Optional</sup> <a name="AdvertiseModeInput" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertiseModeInput"></a>

```go
func AdvertiseModeInput() *string
```

- *Type:* *string

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.asnInput"></a>

```go
func AsnInput() *f64
```

- *Type:* *f64

---

##### `KeepaliveIntervalInput`<sup>Optional</sup> <a name="KeepaliveIntervalInput" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.keepaliveIntervalInput"></a>

```go
func KeepaliveIntervalInput() *f64
```

- *Type:* *f64

---

##### `AdvertisedGroups`<sup>Required</sup> <a name="AdvertisedGroups" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertisedGroups"></a>

```go
func AdvertisedGroups() *[]*string
```

- *Type:* *[]*string

---

##### `AdvertiseMode`<sup>Required</sup> <a name="AdvertiseMode" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.advertiseMode"></a>

```go
func AdvertiseMode() *string
```

- *Type:* *string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.asn"></a>

```go
func Asn() *f64
```

- *Type:* *f64

---

##### `KeepaliveInterval`<sup>Required</sup> <a name="KeepaliveInterval" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.keepaliveInterval"></a>

```go
func KeepaliveInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouter.ComputeRouterBgpOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRouterBgp
```

- *Type:* <a href="#@cdktf/provider-google.computeRouter.ComputeRouterBgp">ComputeRouterBgp</a>

---


### ComputeRouterTimeoutsOutputReference <a name="ComputeRouterTimeoutsOutputReference" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouter"

computerouter.NewComputeRouterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRouterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouter.ComputeRouterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



