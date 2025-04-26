# `networkServicesMesh` Submodule <a name="`networkServicesMesh` Submodule" id="@cdktf/provider-google.networkServicesMesh"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMesh <a name="NetworkServicesMesh" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh google_network_services_mesh}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesmesh"

networkservicesmesh.NewNetworkServicesMesh(scope Construct, id *string, config NetworkServicesMeshConfig) NetworkServicesMesh
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig">NetworkServicesMeshConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig">NetworkServicesMeshConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetInterceptionPort">ResetInterceptionPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.putTimeouts"></a>

```go
func PutTimeouts(value NetworkServicesMeshTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts">NetworkServicesMeshTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetId"></a>

```go
func ResetId()
```

##### `ResetInterceptionPort` <a name="ResetInterceptionPort" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetInterceptionPort"></a>

```go
func ResetInterceptionPort()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesMesh resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesmesh"

networkservicesmesh.NetworkServicesMesh_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesmesh"

networkservicesmesh.NetworkServicesMesh_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesmesh"

networkservicesmesh.NetworkServicesMesh_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesmesh"

networkservicesmesh.NetworkServicesMesh_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkServicesMesh resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkServicesMesh to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkServicesMesh that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesMesh to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference">NetworkServicesMeshTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.interceptionPortInput">InterceptionPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.interceptionPort">InterceptionPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.timeouts"></a>

```go
func Timeouts() NetworkServicesMeshTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference">NetworkServicesMeshTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterceptionPortInput`<sup>Optional</sup> <a name="InterceptionPortInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.interceptionPortInput"></a>

```go
func InterceptionPortInput() *f64
```

- *Type:* *f64

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterceptionPort`<sup>Required</sup> <a name="InterceptionPort" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.interceptionPort"></a>

```go
func InterceptionPort() *f64
```

- *Type:* *f64

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMesh.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMeshConfig <a name="NetworkServicesMeshConfig" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesmesh"

&networkservicesmesh.NetworkServicesMeshConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	Id: *string,
	InterceptionPort: *f64,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.networkServicesMesh.NetworkServicesMeshTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.name">Name</a></code> | <code>*string</code> | Short name of the Mesh resource to be created. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.description">Description</a></code> | <code>*string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#id NetworkServicesMesh#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.interceptionPort">InterceptionPort</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the Mesh resource. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.location">Location</a></code> | <code>*string</code> | Location (region) of the Mesh resource to be created. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#project NetworkServicesMesh#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts">NetworkServicesMeshTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Short name of the Mesh resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#name NetworkServicesMesh#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#description NetworkServicesMesh#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#id NetworkServicesMesh#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InterceptionPort`<sup>Optional</sup> <a name="InterceptionPort" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.interceptionPort"></a>

```go
InterceptionPort *f64
```

- *Type:* *f64

Optional.

If set to a valid TCP port (1-65535), instructs the SIDECAR proxy to listen on the
specified port of localhost (127.0.0.1) address. The SIDECAR proxy will expect all traffic to
be redirected to this port regardless of its actual ip:port destination. If unset, a port
'15001' is used as the interception port. This will is applicable only for sidecar proxy
deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#interception_port NetworkServicesMesh#interception_port}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the Mesh resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#labels NetworkServicesMesh#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location (region) of the Mesh resource to be created.

Only the value 'global' is currently allowed; defaults to 'global' if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#location NetworkServicesMesh#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#project NetworkServicesMesh#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshConfig.property.timeouts"></a>

```go
Timeouts NetworkServicesMeshTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts">NetworkServicesMeshTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#timeouts NetworkServicesMesh#timeouts}

---

### NetworkServicesMeshTimeouts <a name="NetworkServicesMeshTimeouts" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesmesh"

&networkservicesmesh.NetworkServicesMeshTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#create NetworkServicesMesh#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#delete NetworkServicesMesh#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#update NetworkServicesMesh#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#create NetworkServicesMesh#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#delete NetworkServicesMesh#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/network_services_mesh#update NetworkServicesMesh#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMeshTimeoutsOutputReference <a name="NetworkServicesMeshTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesmesh"

networkservicesmesh.NewNetworkServicesMeshTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesMeshTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesMesh.NetworkServicesMeshTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



