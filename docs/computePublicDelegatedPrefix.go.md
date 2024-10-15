# `computePublicDelegatedPrefix` Submodule <a name="`computePublicDelegatedPrefix` Submodule" id="@cdktf/provider-google.computePublicDelegatedPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputePublicDelegatedPrefix <a name="ComputePublicDelegatedPrefix" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix google_compute_public_delegated_prefix}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computepublicdelegatedprefix"

computepublicdelegatedprefix.NewComputePublicDelegatedPrefix(scope Construct, id *string, config ComputePublicDelegatedPrefixConfig) ComputePublicDelegatedPrefix
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig">ComputePublicDelegatedPrefixConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig">ComputePublicDelegatedPrefixConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetIsLiveMigration">ResetIsLiveMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.putTimeouts"></a>

```go
func PutTimeouts(value ComputePublicDelegatedPrefixTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts">ComputePublicDelegatedPrefixTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetId"></a>

```go
func ResetId()
```

##### `ResetIsLiveMigration` <a name="ResetIsLiveMigration" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetIsLiveMigration"></a>

```go
func ResetIsLiveMigration()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputePublicDelegatedPrefix resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computepublicdelegatedprefix"

computepublicdelegatedprefix.ComputePublicDelegatedPrefix_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computepublicdelegatedprefix"

computepublicdelegatedprefix.ComputePublicDelegatedPrefix_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computepublicdelegatedprefix"

computepublicdelegatedprefix.ComputePublicDelegatedPrefix_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computepublicdelegatedprefix"

computepublicdelegatedprefix.ComputePublicDelegatedPrefix_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputePublicDelegatedPrefix resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputePublicDelegatedPrefix to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputePublicDelegatedPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputePublicDelegatedPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference">ComputePublicDelegatedPrefixTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.isLiveMigrationInput">IsLiveMigrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.parentPrefixInput">ParentPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.isLiveMigration">IsLiveMigration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.parentPrefix">ParentPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.timeouts"></a>

```go
func Timeouts() ComputePublicDelegatedPrefixTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference">ComputePublicDelegatedPrefixTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.ipCidrRangeInput"></a>

```go
func IpCidrRangeInput() *string
```

- *Type:* *string

---

##### `IsLiveMigrationInput`<sup>Optional</sup> <a name="IsLiveMigrationInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.isLiveMigrationInput"></a>

```go
func IsLiveMigrationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentPrefixInput`<sup>Optional</sup> <a name="ParentPrefixInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.parentPrefixInput"></a>

```go
func ParentPrefixInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.ipCidrRange"></a>

```go
func IpCidrRange() *string
```

- *Type:* *string

---

##### `IsLiveMigration`<sup>Required</sup> <a name="IsLiveMigration" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.isLiveMigration"></a>

```go
func IsLiveMigration() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentPrefix`<sup>Required</sup> <a name="ParentPrefix" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.parentPrefix"></a>

```go
func ParentPrefix() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputePublicDelegatedPrefixConfig <a name="ComputePublicDelegatedPrefixConfig" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computepublicdelegatedprefix"

&computepublicdelegatedprefix.ComputePublicDelegatedPrefixConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IpCidrRange: *string,
	Name: *string,
	ParentPrefix: *string,
	Region: *string,
	Description: *string,
	Id: *string,
	IsLiveMigration: interface{},
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | The IPv4 address range, in CIDR format, represented by this public advertised prefix. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.parentPrefix">ParentPrefix</a></code> | <code>*string</code> | The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.region">Region</a></code> | <code>*string</code> | A region where the prefix will reside. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix#id ComputePublicDelegatedPrefix#id}. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.isLiveMigration">IsLiveMigration</a></code> | <code>interface{}</code> | If true, the prefix will be live migrated. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix#project ComputePublicDelegatedPrefix#project}. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts">ComputePublicDelegatedPrefixTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.ipCidrRange"></a>

```go
IpCidrRange *string
```

- *Type:* *string

The IPv4 address range, in CIDR format, represented by this public advertised prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix#ip_cidr_range ComputePublicDelegatedPrefix#ip_cidr_range}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix#name ComputePublicDelegatedPrefix#name}

---

##### `ParentPrefix`<sup>Required</sup> <a name="ParentPrefix" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.parentPrefix"></a>

```go
ParentPrefix *string
```

- *Type:* *string

The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix#parent_prefix ComputePublicDelegatedPrefix#parent_prefix}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

A region where the prefix will reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix#region ComputePublicDelegatedPrefix#region}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix#description ComputePublicDelegatedPrefix#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix#id ComputePublicDelegatedPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLiveMigration`<sup>Optional</sup> <a name="IsLiveMigration" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.isLiveMigration"></a>

```go
IsLiveMigration interface{}
```

- *Type:* interface{}

If true, the prefix will be live migrated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix#is_live_migration ComputePublicDelegatedPrefix#is_live_migration}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix#project ComputePublicDelegatedPrefix#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.timeouts"></a>

```go
Timeouts ComputePublicDelegatedPrefixTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts">ComputePublicDelegatedPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix#timeouts ComputePublicDelegatedPrefix#timeouts}

---

### ComputePublicDelegatedPrefixTimeouts <a name="ComputePublicDelegatedPrefixTimeouts" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computepublicdelegatedprefix"

&computepublicdelegatedprefix.ComputePublicDelegatedPrefixTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix#create ComputePublicDelegatedPrefix#create}. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix#delete ComputePublicDelegatedPrefix#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix#create ComputePublicDelegatedPrefix#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.7.0/docs/resources/compute_public_delegated_prefix#delete ComputePublicDelegatedPrefix#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputePublicDelegatedPrefixTimeoutsOutputReference <a name="ComputePublicDelegatedPrefixTimeoutsOutputReference" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computepublicdelegatedprefix"

computepublicdelegatedprefix.NewComputePublicDelegatedPrefixTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputePublicDelegatedPrefixTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



