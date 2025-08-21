# `computeRouterRoutePolicy` Submodule <a name="`computeRouterRoutePolicy` Submodule" id="@cdktf/provider-google.computeRouterRoutePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRouterRoutePolicy <a name="ComputeRouterRoutePolicy" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy google_compute_router_route_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computerouterroutepolicy"

computerouterroutepolicy.NewComputeRouterRoutePolicy(scope Construct, id *string, config ComputeRouterRoutePolicyConfig) ComputeRouterRoutePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig">ComputeRouterRoutePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig">ComputeRouterRoutePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTerms">PutTerms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTerms` <a name="PutTerms" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTerms"></a>

```go
func PutTerms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTerms.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTimeouts"></a>

```go
func PutTimeouts(value ComputeRouterRoutePolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts">ComputeRouterRoutePolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRouterRoutePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computerouterroutepolicy"

computerouterroutepolicy.ComputeRouterRoutePolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computerouterroutepolicy"

computerouterroutepolicy.ComputeRouterRoutePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computerouterroutepolicy"

computerouterroutepolicy.ComputeRouterRoutePolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computerouterroutepolicy"

computerouterroutepolicy.ComputeRouterRoutePolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeRouterRoutePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeRouterRoutePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeRouterRoutePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRouterRoutePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terms">Terms</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList">ComputeRouterRoutePolicyTermsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference">ComputeRouterRoutePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.routerInput">RouterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.termsInput">TermsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.router">Router</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `Terms`<sup>Required</sup> <a name="Terms" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terms"></a>

```go
func Terms() ComputeRouterRoutePolicyTermsList
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList">ComputeRouterRoutePolicyTermsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.timeouts"></a>

```go
func Timeouts() ComputeRouterRoutePolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference">ComputeRouterRoutePolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.routerInput"></a>

```go
func RouterInput() *string
```

- *Type:* *string

---

##### `TermsInput`<sup>Optional</sup> <a name="TermsInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.termsInput"></a>

```go
func TermsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.router"></a>

```go
func Router() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouterRoutePolicyConfig <a name="ComputeRouterRoutePolicyConfig" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computerouterroutepolicy"

&computerouterroutepolicy.ComputeRouterRoutePolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Router: *string,
	Terms: interface{},
	Id: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the route policy. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.router">Router</a></code> | <code>*string</code> | The name of the Cloud Router in which this route policy will be configured. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.terms">Terms</a></code> | <code>interface{}</code> | terms block. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#id ComputeRouterRoutePolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#project ComputeRouterRoutePolicy#project}. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.region">Region</a></code> | <code>*string</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts">ComputeRouterRoutePolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.type">Type</a></code> | <code>*string</code> | This is policy's type, which is one of IMPORT or EXPORT Possible values: ["ROUTE_POLICY_TYPE_IMPORT", "ROUTE_POLICY_TYPE_EXPORT"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the route policy.

This policy's name, which must be a resource ID segment and unique within all policies owned by the Router

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#name ComputeRouterRoutePolicy#name}

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.router"></a>

```go
Router *string
```

- *Type:* *string

The name of the Cloud Router in which this route policy will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#router ComputeRouterRoutePolicy#router}

---

##### `Terms`<sup>Required</sup> <a name="Terms" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.terms"></a>

```go
Terms interface{}
```

- *Type:* interface{}

terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#terms ComputeRouterRoutePolicy#terms}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#id ComputeRouterRoutePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#project ComputeRouterRoutePolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#region ComputeRouterRoutePolicy#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.timeouts"></a>

```go
Timeouts ComputeRouterRoutePolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts">ComputeRouterRoutePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#timeouts ComputeRouterRoutePolicy#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

This is policy's type, which is one of IMPORT or EXPORT Possible values: ["ROUTE_POLICY_TYPE_IMPORT", "ROUTE_POLICY_TYPE_EXPORT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#type ComputeRouterRoutePolicy#type}

---

### ComputeRouterRoutePolicyTerms <a name="ComputeRouterRoutePolicyTerms" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computerouterroutepolicy"

&computerouterroutepolicy.ComputeRouterRoutePolicyTerms {
	Match: github.com/cdktf/cdktf-provider-google-go/google/v16.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch,
	Priority: *f64,
	Actions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.priority">Priority</a></code> | <code>*f64</code> | The evaluation priority for this term, which must be between 0 (inclusive) and 231 (exclusive), and unique within the list. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.actions">Actions</a></code> | <code>interface{}</code> | actions block. |

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.match"></a>

```go
Match ComputeRouterRoutePolicyTermsMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#match ComputeRouterRoutePolicy#match}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

The evaluation priority for this term, which must be between 0 (inclusive) and 231 (exclusive), and unique within the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#priority ComputeRouterRoutePolicy#priority}

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.actions"></a>

```go
Actions interface{}
```

- *Type:* interface{}

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#actions ComputeRouterRoutePolicy#actions}

---

### ComputeRouterRoutePolicyTermsActions <a name="ComputeRouterRoutePolicyTermsActions" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computerouterroutepolicy"

&computerouterroutepolicy.ComputeRouterRoutePolicyTermsActions {
	Expression: *string,
	Description: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.description">Description</a></code> | <code>*string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.location">Location</a></code> | <code>*string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.title">Title</a></code> | <code>*string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#expression ComputeRouterRoutePolicy#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#description ComputeRouterRoutePolicy#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.location"></a>

```go
Location *string
```

- *Type:* *string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#location ComputeRouterRoutePolicy#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#title ComputeRouterRoutePolicy#title}

---

### ComputeRouterRoutePolicyTermsMatch <a name="ComputeRouterRoutePolicyTermsMatch" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computerouterroutepolicy"

&computerouterroutepolicy.ComputeRouterRoutePolicyTermsMatch {
	Expression: *string,
	Description: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.description">Description</a></code> | <code>*string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.location">Location</a></code> | <code>*string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.title">Title</a></code> | <code>*string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#expression ComputeRouterRoutePolicy#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#description ComputeRouterRoutePolicy#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.location"></a>

```go
Location *string
```

- *Type:* *string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#location ComputeRouterRoutePolicy#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#title ComputeRouterRoutePolicy#title}

---

### ComputeRouterRoutePolicyTimeouts <a name="ComputeRouterRoutePolicyTimeouts" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computerouterroutepolicy"

&computerouterroutepolicy.ComputeRouterRoutePolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#create ComputeRouterRoutePolicy#create}. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#delete ComputeRouterRoutePolicy#delete}. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#update ComputeRouterRoutePolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#create ComputeRouterRoutePolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#delete ComputeRouterRoutePolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_router_route_policy#update ComputeRouterRoutePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouterRoutePolicyTermsActionsList <a name="ComputeRouterRoutePolicyTermsActionsList" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computerouterroutepolicy"

computerouterroutepolicy.NewComputeRouterRoutePolicyTermsActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRouterRoutePolicyTermsActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.get"></a>

```go
func Get(index *f64) ComputeRouterRoutePolicyTermsActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRouterRoutePolicyTermsActionsOutputReference <a name="ComputeRouterRoutePolicyTermsActionsOutputReference" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computerouterroutepolicy"

computerouterroutepolicy.NewComputeRouterRoutePolicyTermsActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRouterRoutePolicyTermsActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRouterRoutePolicyTermsList <a name="ComputeRouterRoutePolicyTermsList" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computerouterroutepolicy"

computerouterroutepolicy.NewComputeRouterRoutePolicyTermsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRouterRoutePolicyTermsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.get"></a>

```go
func Get(index *f64) ComputeRouterRoutePolicyTermsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRouterRoutePolicyTermsMatchOutputReference <a name="ComputeRouterRoutePolicyTermsMatchOutputReference" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computerouterroutepolicy"

computerouterroutepolicy.NewComputeRouterRoutePolicyTermsMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRouterRoutePolicyTermsMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRouterRoutePolicyTermsMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a>

---


### ComputeRouterRoutePolicyTermsOutputReference <a name="ComputeRouterRoutePolicyTermsOutputReference" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computerouterroutepolicy"

computerouterroutepolicy.NewComputeRouterRoutePolicyTermsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRouterRoutePolicyTermsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resetActions">ResetActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putActions"></a>

```go
func PutActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putMatch"></a>

```go
func PutMatch(value ComputeRouterRoutePolicyTermsMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a>

---

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resetActions"></a>

```go
func ResetActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList">ComputeRouterRoutePolicyTermsActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference">ComputeRouterRoutePolicyTermsMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.actions"></a>

```go
func Actions() ComputeRouterRoutePolicyTermsActionsList
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList">ComputeRouterRoutePolicyTermsActionsList</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.match"></a>

```go
func Match() ComputeRouterRoutePolicyTermsMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference">ComputeRouterRoutePolicyTermsMatchOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.actionsInput"></a>

```go
func ActionsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.matchInput"></a>

```go
func MatchInput() ComputeRouterRoutePolicyTermsMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRouterRoutePolicyTimeoutsOutputReference <a name="ComputeRouterRoutePolicyTimeoutsOutputReference" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/computerouterroutepolicy"

computerouterroutepolicy.NewComputeRouterRoutePolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRouterRoutePolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



