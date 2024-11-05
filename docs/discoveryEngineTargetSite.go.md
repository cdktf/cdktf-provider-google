# `discoveryEngineTargetSite` Submodule <a name="`discoveryEngineTargetSite` Submodule" id="@cdktf/provider-google.discoveryEngineTargetSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineTargetSite <a name="DiscoveryEngineTargetSite" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/discovery_engine_target_site google_discovery_engine_target_site}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

discoveryenginetargetsite.NewDiscoveryEngineTargetSite(scope Construct, id *string, config DiscoveryEngineTargetSiteConfig) DiscoveryEngineTargetSite
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig">DiscoveryEngineTargetSiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig">DiscoveryEngineTargetSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetExactMatch">ResetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.putTimeouts"></a>

```go
func PutTimeouts(value DiscoveryEngineTargetSiteTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts">DiscoveryEngineTargetSiteTimeouts</a>

---

##### `ResetExactMatch` <a name="ResetExactMatch" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetExactMatch"></a>

```go
func ResetExactMatch()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DiscoveryEngineTargetSite resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

discoveryenginetargetsite.DiscoveryEngineTargetSite_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

discoveryenginetargetsite.DiscoveryEngineTargetSite_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

discoveryenginetargetsite.DiscoveryEngineTargetSite_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

discoveryenginetargetsite.DiscoveryEngineTargetSite_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DiscoveryEngineTargetSite resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DiscoveryEngineTargetSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DiscoveryEngineTargetSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/discovery_engine_target_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineTargetSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.failureReason">FailureReason</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList">DiscoveryEngineTargetSiteFailureReasonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.generatedUriPattern">GeneratedUriPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.indexingStatus">IndexingStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.rootDomainUri">RootDomainUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.siteVerificationInfo">SiteVerificationInfo</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList">DiscoveryEngineTargetSiteSiteVerificationInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.targetSiteId">TargetSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference">DiscoveryEngineTargetSiteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.dataStoreIdInput">DataStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.exactMatchInput">ExactMatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.providedUriPatternInput">ProvidedUriPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.dataStoreId">DataStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.exactMatch">ExactMatch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.providedUriPattern">ProvidedUriPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.failureReason"></a>

```go
func FailureReason() DiscoveryEngineTargetSiteFailureReasonList
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList">DiscoveryEngineTargetSiteFailureReasonList</a>

---

##### `GeneratedUriPattern`<sup>Required</sup> <a name="GeneratedUriPattern" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.generatedUriPattern"></a>

```go
func GeneratedUriPattern() *string
```

- *Type:* *string

---

##### `IndexingStatus`<sup>Required</sup> <a name="IndexingStatus" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.indexingStatus"></a>

```go
func IndexingStatus() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RootDomainUri`<sup>Required</sup> <a name="RootDomainUri" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.rootDomainUri"></a>

```go
func RootDomainUri() *string
```

- *Type:* *string

---

##### `SiteVerificationInfo`<sup>Required</sup> <a name="SiteVerificationInfo" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.siteVerificationInfo"></a>

```go
func SiteVerificationInfo() DiscoveryEngineTargetSiteSiteVerificationInfoList
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList">DiscoveryEngineTargetSiteSiteVerificationInfoList</a>

---

##### `TargetSiteId`<sup>Required</sup> <a name="TargetSiteId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.targetSiteId"></a>

```go
func TargetSiteId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.timeouts"></a>

```go
func Timeouts() DiscoveryEngineTargetSiteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference">DiscoveryEngineTargetSiteTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DataStoreIdInput`<sup>Optional</sup> <a name="DataStoreIdInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.dataStoreIdInput"></a>

```go
func DataStoreIdInput() *string
```

- *Type:* *string

---

##### `ExactMatchInput`<sup>Optional</sup> <a name="ExactMatchInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.exactMatchInput"></a>

```go
func ExactMatchInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProvidedUriPatternInput`<sup>Optional</sup> <a name="ProvidedUriPatternInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.providedUriPatternInput"></a>

```go
func ProvidedUriPatternInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DataStoreId`<sup>Required</sup> <a name="DataStoreId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.dataStoreId"></a>

```go
func DataStoreId() *string
```

- *Type:* *string

---

##### `ExactMatch`<sup>Required</sup> <a name="ExactMatch" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.exactMatch"></a>

```go
func ExactMatch() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ProvidedUriPattern`<sup>Required</sup> <a name="ProvidedUriPattern" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.providedUriPattern"></a>

```go
func ProvidedUriPattern() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSite.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineTargetSiteConfig <a name="DiscoveryEngineTargetSiteConfig" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

&discoveryenginetargetsite.DiscoveryEngineTargetSiteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataStoreId: *string,
	Location: *string,
	ProvidedUriPattern: *string,
	ExactMatch: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.dataStoreId">DataStoreId</a></code> | <code>*string</code> | The unique id of the data store. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.providedUriPattern">ProvidedUriPattern</a></code> | <code>*string</code> | The user provided URI pattern from which the 'generated_uri_pattern' is generated. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.exactMatch">ExactMatch</a></code> | <code>interface{}</code> | If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/discovery_engine_target_site#id DiscoveryEngineTargetSite#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/discovery_engine_target_site#project DiscoveryEngineTargetSite#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts">DiscoveryEngineTargetSiteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.type">Type</a></code> | <code>*string</code> | The possible target site types. Possible values: ["INCLUDE", "EXCLUDE"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataStoreId`<sup>Required</sup> <a name="DataStoreId" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.dataStoreId"></a>

```go
DataStoreId *string
```

- *Type:* *string

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/discovery_engine_target_site#data_store_id DiscoveryEngineTargetSite#data_store_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/discovery_engine_target_site#location DiscoveryEngineTargetSite#location}

---

##### `ProvidedUriPattern`<sup>Required</sup> <a name="ProvidedUriPattern" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.providedUriPattern"></a>

```go
ProvidedUriPattern *string
```

- *Type:* *string

The user provided URI pattern from which the 'generated_uri_pattern' is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/discovery_engine_target_site#provided_uri_pattern DiscoveryEngineTargetSite#provided_uri_pattern}

---

##### `ExactMatch`<sup>Optional</sup> <a name="ExactMatch" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.exactMatch"></a>

```go
ExactMatch interface{}
```

- *Type:* interface{}

If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern.

If set to true, an uri_pattern
is generated to try to be an exact match of the provided_uri_pattern or
just the specific page if the provided_uri_pattern is a specific one.
provided_uri_pattern is always normalized to generate the URI pattern to
be used by the search engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/discovery_engine_target_site#exact_match DiscoveryEngineTargetSite#exact_match}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/discovery_engine_target_site#id DiscoveryEngineTargetSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/discovery_engine_target_site#project DiscoveryEngineTargetSite#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.timeouts"></a>

```go
Timeouts DiscoveryEngineTargetSiteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts">DiscoveryEngineTargetSiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/discovery_engine_target_site#timeouts DiscoveryEngineTargetSite#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The possible target site types. Possible values: ["INCLUDE", "EXCLUDE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/discovery_engine_target_site#type DiscoveryEngineTargetSite#type}

---

### DiscoveryEngineTargetSiteFailureReason <a name="DiscoveryEngineTargetSiteFailureReason" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReason"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReason.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

&discoveryenginetargetsite.DiscoveryEngineTargetSiteFailureReason {

}
```


### DiscoveryEngineTargetSiteFailureReasonQuotaFailure <a name="DiscoveryEngineTargetSiteFailureReasonQuotaFailure" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

&discoveryenginetargetsite.DiscoveryEngineTargetSiteFailureReasonQuotaFailure {

}
```


### DiscoveryEngineTargetSiteSiteVerificationInfo <a name="DiscoveryEngineTargetSiteSiteVerificationInfo" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

&discoveryenginetargetsite.DiscoveryEngineTargetSiteSiteVerificationInfo {

}
```


### DiscoveryEngineTargetSiteTimeouts <a name="DiscoveryEngineTargetSiteTimeouts" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

&discoveryenginetargetsite.DiscoveryEngineTargetSiteTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/discovery_engine_target_site#create DiscoveryEngineTargetSite#create}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/discovery_engine_target_site#delete DiscoveryEngineTargetSite#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/discovery_engine_target_site#create DiscoveryEngineTargetSite#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/discovery_engine_target_site#delete DiscoveryEngineTargetSite#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineTargetSiteFailureReasonList <a name="DiscoveryEngineTargetSiteFailureReasonList" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

discoveryenginetargetsite.NewDiscoveryEngineTargetSiteFailureReasonList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DiscoveryEngineTargetSiteFailureReasonList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.get"></a>

```go
func Get(index *f64) DiscoveryEngineTargetSiteFailureReasonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DiscoveryEngineTargetSiteFailureReasonOutputReference <a name="DiscoveryEngineTargetSiteFailureReasonOutputReference" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

discoveryenginetargetsite.NewDiscoveryEngineTargetSiteFailureReasonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DiscoveryEngineTargetSiteFailureReasonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.property.quotaFailure">QuotaFailure</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList">DiscoveryEngineTargetSiteFailureReasonQuotaFailureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReason">DiscoveryEngineTargetSiteFailureReason</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QuotaFailure`<sup>Required</sup> <a name="QuotaFailure" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.property.quotaFailure"></a>

```go
func QuotaFailure() DiscoveryEngineTargetSiteFailureReasonQuotaFailureList
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList">DiscoveryEngineTargetSiteFailureReasonQuotaFailureList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineTargetSiteFailureReason
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReason">DiscoveryEngineTargetSiteFailureReason</a>

---


### DiscoveryEngineTargetSiteFailureReasonQuotaFailureList <a name="DiscoveryEngineTargetSiteFailureReasonQuotaFailureList" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

discoveryenginetargetsite.NewDiscoveryEngineTargetSiteFailureReasonQuotaFailureList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DiscoveryEngineTargetSiteFailureReasonQuotaFailureList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.get"></a>

```go
func Get(index *f64) DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference <a name="DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

discoveryenginetargetsite.NewDiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.totalRequiredQuota">TotalRequiredQuota</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailure">DiscoveryEngineTargetSiteFailureReasonQuotaFailure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TotalRequiredQuota`<sup>Required</sup> <a name="TotalRequiredQuota" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.totalRequiredQuota"></a>

```go
func TotalRequiredQuota() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailureOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineTargetSiteFailureReasonQuotaFailure
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteFailureReasonQuotaFailure">DiscoveryEngineTargetSiteFailureReasonQuotaFailure</a>

---


### DiscoveryEngineTargetSiteSiteVerificationInfoList <a name="DiscoveryEngineTargetSiteSiteVerificationInfoList" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

discoveryenginetargetsite.NewDiscoveryEngineTargetSiteSiteVerificationInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DiscoveryEngineTargetSiteSiteVerificationInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.get"></a>

```go
func Get(index *f64) DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference <a name="DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

discoveryenginetargetsite.NewDiscoveryEngineTargetSiteSiteVerificationInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.siteVerificationState">SiteVerificationState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.verifyTime">VerifyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfo">DiscoveryEngineTargetSiteSiteVerificationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SiteVerificationState`<sup>Required</sup> <a name="SiteVerificationState" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.siteVerificationState"></a>

```go
func SiteVerificationState() *string
```

- *Type:* *string

---

##### `VerifyTime`<sup>Required</sup> <a name="VerifyTime" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.verifyTime"></a>

```go
func VerifyTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineTargetSiteSiteVerificationInfo
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteSiteVerificationInfo">DiscoveryEngineTargetSiteSiteVerificationInfo</a>

---


### DiscoveryEngineTargetSiteTimeoutsOutputReference <a name="DiscoveryEngineTargetSiteTimeoutsOutputReference" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/discoveryenginetargetsite"

discoveryenginetargetsite.NewDiscoveryEngineTargetSiteTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineTargetSiteTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineTargetSite.DiscoveryEngineTargetSiteTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



