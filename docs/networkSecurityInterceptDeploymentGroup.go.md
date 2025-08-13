# `networkSecurityInterceptDeploymentGroup` Submodule <a name="`networkSecurityInterceptDeploymentGroup` Submodule" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityInterceptDeploymentGroup <a name="NetworkSecurityInterceptDeploymentGroup" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group google_network_security_intercept_deployment_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeploymentgroup"

networksecurityinterceptdeploymentgroup.NewNetworkSecurityInterceptDeploymentGroup(scope Construct, id *string, config NetworkSecurityInterceptDeploymentGroupConfig) NetworkSecurityInterceptDeploymentGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig">NetworkSecurityInterceptDeploymentGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig">NetworkSecurityInterceptDeploymentGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.putTimeouts"></a>

```go
func PutTimeouts(value NetworkSecurityInterceptDeploymentGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts">NetworkSecurityInterceptDeploymentGroupTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityInterceptDeploymentGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeploymentgroup"

networksecurityinterceptdeploymentgroup.NetworkSecurityInterceptDeploymentGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeploymentgroup"

networksecurityinterceptdeploymentgroup.NetworkSecurityInterceptDeploymentGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeploymentgroup"

networksecurityinterceptdeploymentgroup.NetworkSecurityInterceptDeploymentGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeploymentgroup"

networksecurityinterceptdeploymentgroup.NetworkSecurityInterceptDeploymentGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkSecurityInterceptDeploymentGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkSecurityInterceptDeploymentGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkSecurityInterceptDeploymentGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityInterceptDeploymentGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.connectedEndpointGroups">ConnectedEndpointGroups</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList">NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.locations">Locations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList">NetworkSecurityInterceptDeploymentGroupLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference">NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupIdInput">InterceptDeploymentGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupId">InterceptDeploymentGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectedEndpointGroups`<sup>Required</sup> <a name="ConnectedEndpointGroups" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.connectedEndpointGroups"></a>

```go
func ConnectedEndpointGroups() NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList">NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.locations"></a>

```go
func Locations() NetworkSecurityInterceptDeploymentGroupLocationsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList">NetworkSecurityInterceptDeploymentGroupLocationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.timeouts"></a>

```go
func Timeouts() NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference">NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterceptDeploymentGroupIdInput`<sup>Optional</sup> <a name="InterceptDeploymentGroupIdInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupIdInput"></a>

```go
func InterceptDeploymentGroupIdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterceptDeploymentGroupId`<sup>Required</sup> <a name="InterceptDeploymentGroupId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupId"></a>

```go
func InterceptDeploymentGroupId() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityInterceptDeploymentGroupConfig <a name="NetworkSecurityInterceptDeploymentGroupConfig" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeploymentgroup"

&networksecurityinterceptdeploymentgroup.NetworkSecurityInterceptDeploymentGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InterceptDeploymentGroupId: *string,
	Location: *string,
	Network: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.interceptDeploymentGroupId">InterceptDeploymentGroupId</a></code> | <code>*string</code> | The ID to use for the new deployment group, which will become the final component of the deployment group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.location">Location</a></code> | <code>*string</code> | The cloud location of the deployment group, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.network">Network</a></code> | <code>*string</code> | The network that will be used for all child deployments, for example: 'projects/{project}/global/networks/{network}'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.description">Description</a></code> | <code>*string</code> | User-provided description of the deployment group. Used as additional context for the deployment group. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#id NetworkSecurityInterceptDeploymentGroup#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#project NetworkSecurityInterceptDeploymentGroup#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts">NetworkSecurityInterceptDeploymentGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InterceptDeploymentGroupId`<sup>Required</sup> <a name="InterceptDeploymentGroupId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.interceptDeploymentGroupId"></a>

```go
InterceptDeploymentGroupId *string
```

- *Type:* *string

The ID to use for the new deployment group, which will become the final component of the deployment group's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#intercept_deployment_group_id NetworkSecurityInterceptDeploymentGroup#intercept_deployment_group_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The cloud location of the deployment group, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#location NetworkSecurityInterceptDeploymentGroup#location}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The network that will be used for all child deployments, for example: 'projects/{project}/global/networks/{network}'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#network NetworkSecurityInterceptDeploymentGroup#network}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-provided description of the deployment group. Used as additional context for the deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#description NetworkSecurityInterceptDeploymentGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#id NetworkSecurityInterceptDeploymentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#labels NetworkSecurityInterceptDeploymentGroup#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#project NetworkSecurityInterceptDeploymentGroup#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.timeouts"></a>

```go
Timeouts NetworkSecurityInterceptDeploymentGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts">NetworkSecurityInterceptDeploymentGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#timeouts NetworkSecurityInterceptDeploymentGroup#timeouts}

---

### NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups <a name="NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeploymentgroup"

&networksecurityinterceptdeploymentgroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups {

}
```


### NetworkSecurityInterceptDeploymentGroupLocations <a name="NetworkSecurityInterceptDeploymentGroupLocations" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeploymentgroup"

&networksecurityinterceptdeploymentgroup.NetworkSecurityInterceptDeploymentGroupLocations {

}
```


### NetworkSecurityInterceptDeploymentGroupTimeouts <a name="NetworkSecurityInterceptDeploymentGroupTimeouts" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeploymentgroup"

&networksecurityinterceptdeploymentgroup.NetworkSecurityInterceptDeploymentGroupTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#create NetworkSecurityInterceptDeploymentGroup#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#delete NetworkSecurityInterceptDeploymentGroup#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#update NetworkSecurityInterceptDeploymentGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#create NetworkSecurityInterceptDeploymentGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#delete NetworkSecurityInterceptDeploymentGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/network_security_intercept_deployment_group#update NetworkSecurityInterceptDeploymentGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList <a name="NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeploymentgroup"

networksecurityinterceptdeploymentgroup.NewNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.get"></a>

```go
func Get(index *f64) NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference <a name="NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeploymentgroup"

networksecurityinterceptdeploymentgroup.NewNetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups">NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups">NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups</a>

---


### NetworkSecurityInterceptDeploymentGroupLocationsList <a name="NetworkSecurityInterceptDeploymentGroupLocationsList" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeploymentgroup"

networksecurityinterceptdeploymentgroup.NewNetworkSecurityInterceptDeploymentGroupLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityInterceptDeploymentGroupLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.get"></a>

```go
func Get(index *f64) NetworkSecurityInterceptDeploymentGroupLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkSecurityInterceptDeploymentGroupLocationsOutputReference <a name="NetworkSecurityInterceptDeploymentGroupLocationsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeploymentgroup"

networksecurityinterceptdeploymentgroup.NewNetworkSecurityInterceptDeploymentGroupLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityInterceptDeploymentGroupLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocations">NetworkSecurityInterceptDeploymentGroupLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityInterceptDeploymentGroupLocations
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocations">NetworkSecurityInterceptDeploymentGroupLocations</a>

---


### NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference <a name="NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/networksecurityinterceptdeploymentgroup"

networksecurityinterceptdeploymentgroup.NewNetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



