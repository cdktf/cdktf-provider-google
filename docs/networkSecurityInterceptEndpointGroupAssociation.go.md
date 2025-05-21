# `networkSecurityInterceptEndpointGroupAssociation` Submodule <a name="`networkSecurityInterceptEndpointGroupAssociation` Submodule" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityInterceptEndpointGroupAssociation <a name="NetworkSecurityInterceptEndpointGroupAssociation" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association google_network_security_intercept_endpoint_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityinterceptendpointgroupassociation"

networksecurityinterceptendpointgroupassociation.NewNetworkSecurityInterceptEndpointGroupAssociation(scope Construct, id *string, config NetworkSecurityInterceptEndpointGroupAssociationConfig) NetworkSecurityInterceptEndpointGroupAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig">NetworkSecurityInterceptEndpointGroupAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig">NetworkSecurityInterceptEndpointGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetInterceptEndpointGroupAssociationId">ResetInterceptEndpointGroupAssociationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.putTimeouts"></a>

```go
func PutTimeouts(value NetworkSecurityInterceptEndpointGroupAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetInterceptEndpointGroupAssociationId` <a name="ResetInterceptEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetInterceptEndpointGroupAssociationId"></a>

```go
func ResetInterceptEndpointGroupAssociationId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityInterceptEndpointGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityinterceptendpointgroupassociation"

networksecurityinterceptendpointgroupassociation.NetworkSecurityInterceptEndpointGroupAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityinterceptendpointgroupassociation"

networksecurityinterceptendpointgroupassociation.NetworkSecurityInterceptEndpointGroupAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityinterceptendpointgroupassociation"

networksecurityinterceptendpointgroupassociation.NetworkSecurityInterceptEndpointGroupAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityinterceptendpointgroupassociation"

networksecurityinterceptendpointgroupassociation.NetworkSecurityInterceptEndpointGroupAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkSecurityInterceptEndpointGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkSecurityInterceptEndpointGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkSecurityInterceptEndpointGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityInterceptEndpointGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locations">Locations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList">NetworkSecurityInterceptEndpointGroupAssociationLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locationsDetails">LocationsDetails</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList">NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference">NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationIdInput">InterceptEndpointGroupAssociationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupInput">InterceptEndpointGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroup">InterceptEndpointGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationId">InterceptEndpointGroupAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locations"></a>

```go
func Locations() NetworkSecurityInterceptEndpointGroupAssociationLocationsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList">NetworkSecurityInterceptEndpointGroupAssociationLocationsList</a>

---

##### `LocationsDetails`<sup>Required</sup> <a name="LocationsDetails" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locationsDetails"></a>

```go
func LocationsDetails() NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList">NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.timeouts"></a>

```go
func Timeouts() NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference">NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterceptEndpointGroupAssociationIdInput`<sup>Optional</sup> <a name="InterceptEndpointGroupAssociationIdInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationIdInput"></a>

```go
func InterceptEndpointGroupAssociationIdInput() *string
```

- *Type:* *string

---

##### `InterceptEndpointGroupInput`<sup>Optional</sup> <a name="InterceptEndpointGroupInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupInput"></a>

```go
func InterceptEndpointGroupInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterceptEndpointGroup`<sup>Required</sup> <a name="InterceptEndpointGroup" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroup"></a>

```go
func InterceptEndpointGroup() *string
```

- *Type:* *string

---

##### `InterceptEndpointGroupAssociationId`<sup>Required</sup> <a name="InterceptEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationId"></a>

```go
func InterceptEndpointGroupAssociationId() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityInterceptEndpointGroupAssociationConfig <a name="NetworkSecurityInterceptEndpointGroupAssociationConfig" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityinterceptendpointgroupassociation"

&networksecurityinterceptendpointgroupassociation.NetworkSecurityInterceptEndpointGroupAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InterceptEndpointGroup: *string,
	Location: *string,
	Network: *string,
	Id: *string,
	InterceptEndpointGroupAssociationId: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroup">InterceptEndpointGroup</a></code> | <code>*string</code> | The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/interceptEndpointGroups/my-eg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.location">Location</a></code> | <code>*string</code> | The cloud location of the association, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.network">Network</a></code> | <code>*string</code> | The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#id NetworkSecurityInterceptEndpointGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroupAssociationId">InterceptEndpointGroupAssociationId</a></code> | <code>*string</code> | The ID to use for the new association, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#project NetworkSecurityInterceptEndpointGroupAssociation#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InterceptEndpointGroup`<sup>Required</sup> <a name="InterceptEndpointGroup" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroup"></a>

```go
InterceptEndpointGroup *string
```

- *Type:* *string

The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/interceptEndpointGroups/my-eg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#intercept_endpoint_group NetworkSecurityInterceptEndpointGroupAssociation#intercept_endpoint_group}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The cloud location of the association, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#location NetworkSecurityInterceptEndpointGroupAssociation#location}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#network NetworkSecurityInterceptEndpointGroupAssociation#network}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#id NetworkSecurityInterceptEndpointGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InterceptEndpointGroupAssociationId`<sup>Optional</sup> <a name="InterceptEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroupAssociationId"></a>

```go
InterceptEndpointGroupAssociationId *string
```

- *Type:* *string

The ID to use for the new association, which will become the final component of the endpoint group's resource name.

If not provided, the
server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#intercept_endpoint_group_association_id NetworkSecurityInterceptEndpointGroupAssociation#intercept_endpoint_group_association_id}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#labels NetworkSecurityInterceptEndpointGroupAssociation#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#project NetworkSecurityInterceptEndpointGroupAssociation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.timeouts"></a>

```go
Timeouts NetworkSecurityInterceptEndpointGroupAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#timeouts NetworkSecurityInterceptEndpointGroupAssociation#timeouts}

---

### NetworkSecurityInterceptEndpointGroupAssociationLocations <a name="NetworkSecurityInterceptEndpointGroupAssociationLocations" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityinterceptendpointgroupassociation"

&networksecurityinterceptendpointgroupassociation.NetworkSecurityInterceptEndpointGroupAssociationLocations {

}
```


### NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityinterceptendpointgroupassociation"

&networksecurityinterceptendpointgroupassociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails {

}
```


### NetworkSecurityInterceptEndpointGroupAssociationTimeouts <a name="NetworkSecurityInterceptEndpointGroupAssociationTimeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityinterceptendpointgroupassociation"

&networksecurityinterceptendpointgroupassociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#create NetworkSecurityInterceptEndpointGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#delete NetworkSecurityInterceptEndpointGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#update NetworkSecurityInterceptEndpointGroupAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#create NetworkSecurityInterceptEndpointGroupAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#delete NetworkSecurityInterceptEndpointGroupAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_security_intercept_endpoint_group_association#update NetworkSecurityInterceptEndpointGroupAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityinterceptendpointgroupassociation"

networksecurityinterceptendpointgroupassociation.NewNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.get"></a>

```go
func Get(index *f64) NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityinterceptendpointgroupassociation"

networksecurityinterceptendpointgroupassociation.NewNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails">NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails">NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails</a>

---


### NetworkSecurityInterceptEndpointGroupAssociationLocationsList <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsList" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityinterceptendpointgroupassociation"

networksecurityinterceptendpointgroupassociation.NewNetworkSecurityInterceptEndpointGroupAssociationLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityInterceptEndpointGroupAssociationLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.get"></a>

```go
func Get(index *f64) NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityinterceptendpointgroupassociation"

networksecurityinterceptendpointgroupassociation.NewNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations">NetworkSecurityInterceptEndpointGroupAssociationLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecurityInterceptEndpointGroupAssociationLocations
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations">NetworkSecurityInterceptEndpointGroupAssociationLocations</a>

---


### NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference <a name="NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networksecurityinterceptendpointgroupassociation"

networksecurityinterceptendpointgroupassociation.NewNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



