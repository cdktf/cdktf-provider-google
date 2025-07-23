# `networkSecurityInterceptDeployment` Submodule <a name="`networkSecurityInterceptDeployment` Submodule" id="@cdktf/provider-google.networkSecurityInterceptDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityInterceptDeployment <a name="NetworkSecurityInterceptDeployment" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment google_network_security_intercept_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeployment"

networksecurityinterceptdeployment.NewNetworkSecurityInterceptDeployment(scope Construct, id *string, config NetworkSecurityInterceptDeploymentConfig) NetworkSecurityInterceptDeployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig">NetworkSecurityInterceptDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig">NetworkSecurityInterceptDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.putTimeouts"></a>

```go
func PutTimeouts(value NetworkSecurityInterceptDeploymentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeouts">NetworkSecurityInterceptDeploymentTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityInterceptDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeployment"

networksecurityinterceptdeployment.NetworkSecurityInterceptDeployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeployment"

networksecurityinterceptdeployment.NetworkSecurityInterceptDeployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeployment"

networksecurityinterceptdeployment.NetworkSecurityInterceptDeployment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeployment"

networksecurityinterceptdeployment.NetworkSecurityInterceptDeployment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkSecurityInterceptDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkSecurityInterceptDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkSecurityInterceptDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityInterceptDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference">NetworkSecurityInterceptDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.forwardingRuleInput">ForwardingRuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.interceptDeploymentGroupInput">InterceptDeploymentGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.interceptDeploymentIdInput">InterceptDeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.forwardingRule">ForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.interceptDeploymentGroup">InterceptDeploymentGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.interceptDeploymentId">InterceptDeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.timeouts"></a>

```go
func Timeouts() NetworkSecurityInterceptDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference">NetworkSecurityInterceptDeploymentTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ForwardingRuleInput`<sup>Optional</sup> <a name="ForwardingRuleInput" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.forwardingRuleInput"></a>

```go
func ForwardingRuleInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterceptDeploymentGroupInput`<sup>Optional</sup> <a name="InterceptDeploymentGroupInput" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.interceptDeploymentGroupInput"></a>

```go
func InterceptDeploymentGroupInput() *string
```

- *Type:* *string

---

##### `InterceptDeploymentIdInput`<sup>Optional</sup> <a name="InterceptDeploymentIdInput" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.interceptDeploymentIdInput"></a>

```go
func InterceptDeploymentIdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.forwardingRule"></a>

```go
func ForwardingRule() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterceptDeploymentGroup`<sup>Required</sup> <a name="InterceptDeploymentGroup" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.interceptDeploymentGroup"></a>

```go
func InterceptDeploymentGroup() *string
```

- *Type:* *string

---

##### `InterceptDeploymentId`<sup>Required</sup> <a name="InterceptDeploymentId" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.interceptDeploymentId"></a>

```go
func InterceptDeploymentId() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityInterceptDeploymentConfig <a name="NetworkSecurityInterceptDeploymentConfig" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeployment"

&networksecurityinterceptdeployment.NetworkSecurityInterceptDeploymentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ForwardingRule: *string,
	InterceptDeploymentGroup: *string,
	InterceptDeploymentId: *string,
	Location: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.forwardingRule">ForwardingRule</a></code> | <code>*string</code> | The regional forwarding rule that fronts the interceptors, for example: 'projects/123456789/regions/us-central1/forwardingRules/my-rule'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.interceptDeploymentGroup">InterceptDeploymentGroup</a></code> | <code>*string</code> | The deployment group that this deployment is a part of, for example: 'projects/123456789/locations/global/interceptDeploymentGroups/my-dg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.interceptDeploymentId">InterceptDeploymentId</a></code> | <code>*string</code> | The ID to use for the new deployment, which will become the final component of the deployment's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.location">Location</a></code> | <code>*string</code> | The cloud location of the deployment, e.g. 'us-central1-a' or 'asia-south1-b'. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.description">Description</a></code> | <code>*string</code> | User-provided description of the deployment. Used as additional context for the deployment. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#id NetworkSecurityInterceptDeployment#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#project NetworkSecurityInterceptDeployment#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeouts">NetworkSecurityInterceptDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.forwardingRule"></a>

```go
ForwardingRule *string
```

- *Type:* *string

The regional forwarding rule that fronts the interceptors, for example: 'projects/123456789/regions/us-central1/forwardingRules/my-rule'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#forwarding_rule NetworkSecurityInterceptDeployment#forwarding_rule}

---

##### `InterceptDeploymentGroup`<sup>Required</sup> <a name="InterceptDeploymentGroup" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.interceptDeploymentGroup"></a>

```go
InterceptDeploymentGroup *string
```

- *Type:* *string

The deployment group that this deployment is a part of, for example: 'projects/123456789/locations/global/interceptDeploymentGroups/my-dg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#intercept_deployment_group NetworkSecurityInterceptDeployment#intercept_deployment_group}

---

##### `InterceptDeploymentId`<sup>Required</sup> <a name="InterceptDeploymentId" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.interceptDeploymentId"></a>

```go
InterceptDeploymentId *string
```

- *Type:* *string

The ID to use for the new deployment, which will become the final component of the deployment's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#intercept_deployment_id NetworkSecurityInterceptDeployment#intercept_deployment_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The cloud location of the deployment, e.g. 'us-central1-a' or 'asia-south1-b'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#location NetworkSecurityInterceptDeployment#location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-provided description of the deployment. Used as additional context for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#description NetworkSecurityInterceptDeployment#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#id NetworkSecurityInterceptDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#labels NetworkSecurityInterceptDeployment#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#project NetworkSecurityInterceptDeployment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentConfig.property.timeouts"></a>

```go
Timeouts NetworkSecurityInterceptDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeouts">NetworkSecurityInterceptDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#timeouts NetworkSecurityInterceptDeployment#timeouts}

---

### NetworkSecurityInterceptDeploymentTimeouts <a name="NetworkSecurityInterceptDeploymentTimeouts" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeployment"

&networksecurityinterceptdeployment.NetworkSecurityInterceptDeploymentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#create NetworkSecurityInterceptDeployment#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#delete NetworkSecurityInterceptDeployment#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#update NetworkSecurityInterceptDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#create NetworkSecurityInterceptDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#delete NetworkSecurityInterceptDeployment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_intercept_deployment#update NetworkSecurityInterceptDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityInterceptDeploymentTimeoutsOutputReference <a name="NetworkSecurityInterceptDeploymentTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeployment"

networksecurityinterceptdeployment.NewNetworkSecurityInterceptDeploymentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityInterceptDeploymentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityInterceptDeployment.NetworkSecurityInterceptDeploymentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



