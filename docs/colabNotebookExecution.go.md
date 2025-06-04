# `colabNotebookExecution` Submodule <a name="`colabNotebookExecution` Submodule" id="@cdktf/provider-google.colabNotebookExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabNotebookExecution <a name="ColabNotebookExecution" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution google_colab_notebook_execution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/colabnotebookexecution"

colabnotebookexecution.NewColabNotebookExecution(scope Construct, id *string, config ColabNotebookExecutionConfig) ColabNotebookExecution
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig">ColabNotebookExecutionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig">ColabNotebookExecutionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource">PutDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource">PutDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource">PutGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDataformRepositorySource">ResetDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDirectNotebookSource">ResetDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionTimeout">ResetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionUser">ResetExecutionUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetGcsNotebookSource">ResetGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookExecutionJobId">ResetNotebookExecutionJobId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookRuntimeTemplateResourceName">ResetNotebookRuntimeTemplateResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataformRepositorySource` <a name="PutDataformRepositorySource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource"></a>

```go
func PutDataformRepositorySource(value ColabNotebookExecutionDataformRepositorySource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---

##### `PutDirectNotebookSource` <a name="PutDirectNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource"></a>

```go
func PutDirectNotebookSource(value ColabNotebookExecutionDirectNotebookSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---

##### `PutGcsNotebookSource` <a name="PutGcsNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource"></a>

```go
func PutGcsNotebookSource(value ColabNotebookExecutionGcsNotebookSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts"></a>

```go
func PutTimeouts(value ColabNotebookExecutionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

---

##### `ResetDataformRepositorySource` <a name="ResetDataformRepositorySource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDataformRepositorySource"></a>

```go
func ResetDataformRepositorySource()
```

##### `ResetDirectNotebookSource` <a name="ResetDirectNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDirectNotebookSource"></a>

```go
func ResetDirectNotebookSource()
```

##### `ResetExecutionTimeout` <a name="ResetExecutionTimeout" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionTimeout"></a>

```go
func ResetExecutionTimeout()
```

##### `ResetExecutionUser` <a name="ResetExecutionUser" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionUser"></a>

```go
func ResetExecutionUser()
```

##### `ResetGcsNotebookSource` <a name="ResetGcsNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetGcsNotebookSource"></a>

```go
func ResetGcsNotebookSource()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetId"></a>

```go
func ResetId()
```

##### `ResetNotebookExecutionJobId` <a name="ResetNotebookExecutionJobId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookExecutionJobId"></a>

```go
func ResetNotebookExecutionJobId()
```

##### `ResetNotebookRuntimeTemplateResourceName` <a name="ResetNotebookRuntimeTemplateResourceName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookRuntimeTemplateResourceName"></a>

```go
func ResetNotebookRuntimeTemplateResourceName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ColabNotebookExecution resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/colabnotebookexecution"

colabnotebookexecution.ColabNotebookExecution_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/colabnotebookexecution"

colabnotebookexecution.ColabNotebookExecution_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/colabnotebookexecution"

colabnotebookexecution.ColabNotebookExecution_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/colabnotebookexecution"

colabnotebookexecution.ColabNotebookExecution_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ColabNotebookExecution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ColabNotebookExecution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ColabNotebookExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ColabNotebookExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySource">DataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference">ColabNotebookExecutionDataformRepositorySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSource">DirectNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference">ColabNotebookExecutionDirectNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSource">GcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference">ColabNotebookExecutionGcsNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference">ColabNotebookExecutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySourceInput">DataformRepositorySourceInput</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSourceInput">DirectNotebookSourceInput</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeoutInput">ExecutionTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUserInput">ExecutionUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSourceInput">GcsNotebookSourceInput</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUriInput">GcsOutputUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobIdInput">NotebookExecutionJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput">NotebookRuntimeTemplateResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeout">ExecutionTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUser">ExecutionUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUri">GcsOutputUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobId">NotebookExecutionJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceName">NotebookRuntimeTemplateResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataformRepositorySource`<sup>Required</sup> <a name="DataformRepositorySource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySource"></a>

```go
func DataformRepositorySource() ColabNotebookExecutionDataformRepositorySourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference">ColabNotebookExecutionDataformRepositorySourceOutputReference</a>

---

##### `DirectNotebookSource`<sup>Required</sup> <a name="DirectNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSource"></a>

```go
func DirectNotebookSource() ColabNotebookExecutionDirectNotebookSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference">ColabNotebookExecutionDirectNotebookSourceOutputReference</a>

---

##### `GcsNotebookSource`<sup>Required</sup> <a name="GcsNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSource"></a>

```go
func GcsNotebookSource() ColabNotebookExecutionGcsNotebookSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference">ColabNotebookExecutionGcsNotebookSourceOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeouts"></a>

```go
func Timeouts() ColabNotebookExecutionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference">ColabNotebookExecutionTimeoutsOutputReference</a>

---

##### `DataformRepositorySourceInput`<sup>Optional</sup> <a name="DataformRepositorySourceInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySourceInput"></a>

```go
func DataformRepositorySourceInput() ColabNotebookExecutionDataformRepositorySource
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---

##### `DirectNotebookSourceInput`<sup>Optional</sup> <a name="DirectNotebookSourceInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSourceInput"></a>

```go
func DirectNotebookSourceInput() ColabNotebookExecutionDirectNotebookSource
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExecutionTimeoutInput`<sup>Optional</sup> <a name="ExecutionTimeoutInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeoutInput"></a>

```go
func ExecutionTimeoutInput() *string
```

- *Type:* *string

---

##### `ExecutionUserInput`<sup>Optional</sup> <a name="ExecutionUserInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUserInput"></a>

```go
func ExecutionUserInput() *string
```

- *Type:* *string

---

##### `GcsNotebookSourceInput`<sup>Optional</sup> <a name="GcsNotebookSourceInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSourceInput"></a>

```go
func GcsNotebookSourceInput() ColabNotebookExecutionGcsNotebookSource
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---

##### `GcsOutputUriInput`<sup>Optional</sup> <a name="GcsOutputUriInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUriInput"></a>

```go
func GcsOutputUriInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NotebookExecutionJobIdInput`<sup>Optional</sup> <a name="NotebookExecutionJobIdInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobIdInput"></a>

```go
func NotebookExecutionJobIdInput() *string
```

- *Type:* *string

---

##### `NotebookRuntimeTemplateResourceNameInput`<sup>Optional</sup> <a name="NotebookRuntimeTemplateResourceNameInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput"></a>

```go
func NotebookRuntimeTemplateResourceNameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecutionTimeout`<sup>Required</sup> <a name="ExecutionTimeout" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeout"></a>

```go
func ExecutionTimeout() *string
```

- *Type:* *string

---

##### `ExecutionUser`<sup>Required</sup> <a name="ExecutionUser" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUser"></a>

```go
func ExecutionUser() *string
```

- *Type:* *string

---

##### `GcsOutputUri`<sup>Required</sup> <a name="GcsOutputUri" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUri"></a>

```go
func GcsOutputUri() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `NotebookExecutionJobId`<sup>Required</sup> <a name="NotebookExecutionJobId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobId"></a>

```go
func NotebookExecutionJobId() *string
```

- *Type:* *string

---

##### `NotebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="NotebookRuntimeTemplateResourceName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceName"></a>

```go
func NotebookRuntimeTemplateResourceName() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ColabNotebookExecutionConfig <a name="ColabNotebookExecutionConfig" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/colabnotebookexecution"

&colabnotebookexecution.ColabNotebookExecutionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	GcsOutputUri: *string,
	Location: *string,
	DataformRepositorySource: github.com/cdktf/cdktf-provider-google-go/google/v15.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource,
	DirectNotebookSource: github.com/cdktf/cdktf-provider-google-go/google/v15.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource,
	ExecutionTimeout: *string,
	ExecutionUser: *string,
	GcsNotebookSource: github.com/cdktf/cdktf-provider-google-go/google/v15.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource,
	Id: *string,
	NotebookExecutionJobId: *string,
	NotebookRuntimeTemplateResourceName: *string,
	Project: *string,
	ServiceAccount: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v15.colabNotebookExecution.ColabNotebookExecutionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsOutputUri">GcsOutputUri</a></code> | <code>*string</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dataformRepositorySource">DataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.directNotebookSource">DirectNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | direct_notebook_source block. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionTimeout">ExecutionTimeout</a></code> | <code>*string</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionUser">ExecutionUser</a></code> | <code>*string</code> | The user email to run the execution as. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsNotebookSource">GcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookExecutionJobId">NotebookExecutionJobId</a></code> | <code>*string</code> | User specified ID for the Notebook Execution Job. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName">NotebookRuntimeTemplateResourceName</a></code> | <code>*string</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account to run the execution as. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#display_name ColabNotebookExecution#display_name}

---

##### `GcsOutputUri`<sup>Required</sup> <a name="GcsOutputUri" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsOutputUri"></a>

```go
GcsOutputUri *string
```

- *Type:* *string

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#gcs_output_uri ColabNotebookExecution#gcs_output_uri}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#location ColabNotebookExecution#location}

---

##### `DataformRepositorySource`<sup>Optional</sup> <a name="DataformRepositorySource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dataformRepositorySource"></a>

```go
DataformRepositorySource ColabNotebookExecutionDataformRepositorySource
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#dataform_repository_source ColabNotebookExecution#dataform_repository_source}

---

##### `DirectNotebookSource`<sup>Optional</sup> <a name="DirectNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.directNotebookSource"></a>

```go
DirectNotebookSource ColabNotebookExecutionDirectNotebookSource
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

direct_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#direct_notebook_source ColabNotebookExecution#direct_notebook_source}

---

##### `ExecutionTimeout`<sup>Optional</sup> <a name="ExecutionTimeout" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionTimeout"></a>

```go
ExecutionTimeout *string
```

- *Type:* *string

Max running time of the execution job in seconds (default 86400s / 24 hrs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#execution_timeout ColabNotebookExecution#execution_timeout}

---

##### `ExecutionUser`<sup>Optional</sup> <a name="ExecutionUser" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionUser"></a>

```go
ExecutionUser *string
```

- *Type:* *string

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#execution_user ColabNotebookExecution#execution_user}

---

##### `GcsNotebookSource`<sup>Optional</sup> <a name="GcsNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsNotebookSource"></a>

```go
GcsNotebookSource ColabNotebookExecutionGcsNotebookSource
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#gcs_notebook_source ColabNotebookExecution#gcs_notebook_source}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotebookExecutionJobId`<sup>Optional</sup> <a name="NotebookExecutionJobId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookExecutionJobId"></a>

```go
NotebookExecutionJobId *string
```

- *Type:* *string

User specified ID for the Notebook Execution Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#notebook_execution_job_id ColabNotebookExecution#notebook_execution_job_id}

---

##### `NotebookRuntimeTemplateResourceName`<sup>Optional</sup> <a name="NotebookRuntimeTemplateResourceName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName"></a>

```go
NotebookRuntimeTemplateResourceName *string
```

- *Type:* *string

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#notebook_runtime_template_resource_name ColabNotebookExecution#notebook_runtime_template_resource_name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}.

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#service_account ColabNotebookExecution#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.timeouts"></a>

```go
Timeouts ColabNotebookExecutionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#timeouts ColabNotebookExecution#timeouts}

---

### ColabNotebookExecutionDataformRepositorySource <a name="ColabNotebookExecutionDataformRepositorySource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/colabnotebookexecution"

&colabnotebookexecution.ColabNotebookExecutionDataformRepositorySource {
	DataformRepositoryResourceName: *string,
	CommitSha: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName">DataformRepositoryResourceName</a></code> | <code>*string</code> | The resource name of the Dataform Repository. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.commitSha">CommitSha</a></code> | <code>*string</code> | The commit SHA to read repository with. If unset, the file will be read at HEAD. |

---

##### `DataformRepositoryResourceName`<sup>Required</sup> <a name="DataformRepositoryResourceName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName"></a>

```go
DataformRepositoryResourceName *string
```

- *Type:* *string

The resource name of the Dataform Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#dataform_repository_resource_name ColabNotebookExecution#dataform_repository_resource_name}

---

##### `CommitSha`<sup>Optional</sup> <a name="CommitSha" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.commitSha"></a>

```go
CommitSha *string
```

- *Type:* *string

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#commit_sha ColabNotebookExecution#commit_sha}

---

### ColabNotebookExecutionDirectNotebookSource <a name="ColabNotebookExecutionDirectNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/colabnotebookexecution"

&colabnotebookexecution.ColabNotebookExecutionDirectNotebookSource {
	Content: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.property.content">Content</a></code> | <code>*string</code> | The base64-encoded contents of the input notebook file. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.property.content"></a>

```go
Content *string
```

- *Type:* *string

The base64-encoded contents of the input notebook file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#content ColabNotebookExecution#content}

---

### ColabNotebookExecutionGcsNotebookSource <a name="ColabNotebookExecutionGcsNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/colabnotebookexecution"

&colabnotebookexecution.ColabNotebookExecutionGcsNotebookSource {
	Uri: *string,
	Generation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.uri">Uri</a></code> | <code>*string</code> | The Cloud Storage uri pointing to the ipynb file. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.generation">Generation</a></code> | <code>*string</code> | The version of the Cloud Storage object to read. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The Cloud Storage uri pointing to the ipynb file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#uri ColabNotebookExecution#uri}

---

##### `Generation`<sup>Optional</sup> <a name="Generation" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.generation"></a>

```go
Generation *string
```

- *Type:* *string

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#generation ColabNotebookExecution#generation}

---

### ColabNotebookExecutionTimeouts <a name="ColabNotebookExecutionTimeouts" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/colabnotebookexecution"

&colabnotebookexecution.ColabNotebookExecutionTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#create ColabNotebookExecution#create}. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#delete ColabNotebookExecution#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#create ColabNotebookExecution#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/colab_notebook_execution#delete ColabNotebookExecution#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ColabNotebookExecutionDataformRepositorySourceOutputReference <a name="ColabNotebookExecutionDataformRepositorySourceOutputReference" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/colabnotebookexecution"

colabnotebookexecution.NewColabNotebookExecutionDataformRepositorySourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabNotebookExecutionDataformRepositorySourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha">ResetCommitSha</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommitSha` <a name="ResetCommitSha" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha"></a>

```go
func ResetCommitSha()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput">CommitShaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput">DataformRepositoryResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha">CommitSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName">DataformRepositoryResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommitShaInput`<sup>Optional</sup> <a name="CommitShaInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput"></a>

```go
func CommitShaInput() *string
```

- *Type:* *string

---

##### `DataformRepositoryResourceNameInput`<sup>Optional</sup> <a name="DataformRepositoryResourceNameInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput"></a>

```go
func DataformRepositoryResourceNameInput() *string
```

- *Type:* *string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha"></a>

```go
func CommitSha() *string
```

- *Type:* *string

---

##### `DataformRepositoryResourceName`<sup>Required</sup> <a name="DataformRepositoryResourceName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName"></a>

```go
func DataformRepositoryResourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabNotebookExecutionDataformRepositorySource
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---


### ColabNotebookExecutionDirectNotebookSourceOutputReference <a name="ColabNotebookExecutionDirectNotebookSourceOutputReference" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/colabnotebookexecution"

colabnotebookexecution.NewColabNotebookExecutionDirectNotebookSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabNotebookExecutionDirectNotebookSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabNotebookExecutionDirectNotebookSource
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---


### ColabNotebookExecutionGcsNotebookSourceOutputReference <a name="ColabNotebookExecutionGcsNotebookSourceOutputReference" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/colabnotebookexecution"

colabnotebookexecution.NewColabNotebookExecutionGcsNotebookSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabNotebookExecutionGcsNotebookSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration">ResetGeneration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGeneration` <a name="ResetGeneration" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration"></a>

```go
func ResetGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput">GenerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation">Generation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GenerationInput`<sup>Optional</sup> <a name="GenerationInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput"></a>

```go
func GenerationInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation"></a>

```go
func Generation() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabNotebookExecutionGcsNotebookSource
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---


### ColabNotebookExecutionTimeoutsOutputReference <a name="ColabNotebookExecutionTimeoutsOutputReference" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v15/colabnotebookexecution"

colabnotebookexecution.NewColabNotebookExecutionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabNotebookExecutionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



