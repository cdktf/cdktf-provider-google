# `apigeeSecurityProfileV2` Submodule <a name="`apigeeSecurityProfileV2` Submodule" id="@cdktf/provider-google.apigeeSecurityProfileV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSecurityProfileV2 <a name="ApigeeSecurityProfileV2" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2 google_apigee_security_profile_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityprofilev2"

apigeesecurityprofilev2.NewApigeeSecurityProfileV2(scope Construct, id *string, config ApigeeSecurityProfileV2Config) ApigeeSecurityProfileV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config">ApigeeSecurityProfileV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config">ApigeeSecurityProfileV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putProfileAssessmentConfigs">PutProfileAssessmentConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProfileAssessmentConfigs` <a name="PutProfileAssessmentConfigs" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putProfileAssessmentConfigs"></a>

```go
func PutProfileAssessmentConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putProfileAssessmentConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putTimeouts"></a>

```go
func PutTimeouts(value ApigeeSecurityProfileV2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeSecurityProfileV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityprofilev2"

apigeesecurityprofilev2.ApigeeSecurityProfileV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityprofilev2"

apigeesecurityprofilev2.ApigeeSecurityProfileV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityprofilev2"

apigeesecurityprofilev2.ApigeeSecurityProfileV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityprofilev2"

apigeesecurityprofilev2.ApigeeSecurityProfileV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApigeeSecurityProfileV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigeeSecurityProfileV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigeeSecurityProfileV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeSecurityProfileV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileAssessmentConfigs">ProfileAssessmentConfigs</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList">ApigeeSecurityProfileV2ProfileAssessmentConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference">ApigeeSecurityProfileV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileAssessmentConfigsInput">ProfileAssessmentConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileIdInput">ProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProfileAssessmentConfigs`<sup>Required</sup> <a name="ProfileAssessmentConfigs" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileAssessmentConfigs"></a>

```go
func ProfileAssessmentConfigs() ApigeeSecurityProfileV2ProfileAssessmentConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList">ApigeeSecurityProfileV2ProfileAssessmentConfigsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.timeouts"></a>

```go
func Timeouts() ApigeeSecurityProfileV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference">ApigeeSecurityProfileV2TimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `ProfileAssessmentConfigsInput`<sup>Optional</sup> <a name="ProfileAssessmentConfigsInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileAssessmentConfigsInput"></a>

```go
func ProfileAssessmentConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileIdInput"></a>

```go
func ProfileIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSecurityProfileV2Config <a name="ApigeeSecurityProfileV2Config" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityprofilev2"

&apigeesecurityprofilev2.ApigeeSecurityProfileV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OrgId: *string,
	ProfileAssessmentConfigs: interface{},
	ProfileId: *string,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.orgId">OrgId</a></code> | <code>*string</code> | The Apigee Organization associated with the Apigee Security Profile V2, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.profileAssessmentConfigs">ProfileAssessmentConfigs</a></code> | <code>interface{}</code> | profile_assessment_configs block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.profileId">ProfileId</a></code> | <code>*string</code> | Resource ID of the security profile. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.description">Description</a></code> | <code>*string</code> | Description of the security profile. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#id ApigeeSecurityProfileV2#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The Apigee Organization associated with the Apigee Security Profile V2, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#org_id ApigeeSecurityProfileV2#org_id}

---

##### `ProfileAssessmentConfigs`<sup>Required</sup> <a name="ProfileAssessmentConfigs" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.profileAssessmentConfigs"></a>

```go
ProfileAssessmentConfigs interface{}
```

- *Type:* interface{}

profile_assessment_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#profile_assessment_configs ApigeeSecurityProfileV2#profile_assessment_configs}

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.profileId"></a>

```go
ProfileId *string
```

- *Type:* *string

Resource ID of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#profile_id ApigeeSecurityProfileV2#profile_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#description ApigeeSecurityProfileV2#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#id ApigeeSecurityProfileV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Config.property.timeouts"></a>

```go
Timeouts ApigeeSecurityProfileV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts">ApigeeSecurityProfileV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#timeouts ApigeeSecurityProfileV2#timeouts}

---

### ApigeeSecurityProfileV2ProfileAssessmentConfigs <a name="ApigeeSecurityProfileV2ProfileAssessmentConfigs" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityprofilev2"

&apigeesecurityprofilev2.ApigeeSecurityProfileV2ProfileAssessmentConfigs {
	Assessment: *string,
	Weight: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs.property.assessment">Assessment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#assessment ApigeeSecurityProfileV2#assessment}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs.property.weight">Weight</a></code> | <code>*string</code> | The weight of the assessment. Possible values: ["MINOR", "MODERATE", "MAJOR"]. |

---

##### `Assessment`<sup>Required</sup> <a name="Assessment" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs.property.assessment"></a>

```go
Assessment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#assessment ApigeeSecurityProfileV2#assessment}.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigs.property.weight"></a>

```go
Weight *string
```

- *Type:* *string

The weight of the assessment. Possible values: ["MINOR", "MODERATE", "MAJOR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#weight ApigeeSecurityProfileV2#weight}

---

### ApigeeSecurityProfileV2Timeouts <a name="ApigeeSecurityProfileV2Timeouts" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityprofilev2"

&apigeesecurityprofilev2.ApigeeSecurityProfileV2Timeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#create ApigeeSecurityProfileV2#create}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#delete ApigeeSecurityProfileV2#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#update ApigeeSecurityProfileV2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#create ApigeeSecurityProfileV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#delete ApigeeSecurityProfileV2#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/apigee_security_profile_v2#update ApigeeSecurityProfileV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSecurityProfileV2ProfileAssessmentConfigsList <a name="ApigeeSecurityProfileV2ProfileAssessmentConfigsList" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityprofilev2"

apigeesecurityprofilev2.NewApigeeSecurityProfileV2ProfileAssessmentConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigeeSecurityProfileV2ProfileAssessmentConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.get"></a>

```go
func Get(index *f64) ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference <a name="ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityprofilev2"

apigeesecurityprofilev2.NewApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.assessmentInput">AssessmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.weightInput">WeightInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.assessment">Assessment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.weight">Weight</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssessmentInput`<sup>Optional</sup> <a name="AssessmentInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.assessmentInput"></a>

```go
func AssessmentInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.weightInput"></a>

```go
func WeightInput() *string
```

- *Type:* *string

---

##### `Assessment`<sup>Required</sup> <a name="Assessment" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.assessment"></a>

```go
func Assessment() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.weight"></a>

```go
func Weight() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2ProfileAssessmentConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigeeSecurityProfileV2TimeoutsOutputReference <a name="ApigeeSecurityProfileV2TimeoutsOutputReference" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityprofilev2"

apigeesecurityprofilev2.NewApigeeSecurityProfileV2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeSecurityProfileV2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityProfileV2.ApigeeSecurityProfileV2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



