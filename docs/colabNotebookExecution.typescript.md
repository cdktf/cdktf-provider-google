# `colabNotebookExecution` Submodule <a name="`colabNotebookExecution` Submodule" id="@cdktf/provider-google.colabNotebookExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabNotebookExecution <a name="ColabNotebookExecution" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution google_colab_notebook_execution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer"></a>

```typescript
import { colabNotebookExecution } from '@cdktf/provider-google'

new colabNotebookExecution.ColabNotebookExecution(scope: Construct, id: string, config: ColabNotebookExecutionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig">ColabNotebookExecutionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig">ColabNotebookExecutionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource">putDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource">putDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource">putGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDataformRepositorySource">resetDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDirectNotebookSource">resetDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionTimeout">resetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionUser">resetExecutionUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetGcsNotebookSource">resetGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookExecutionJobId">resetNotebookExecutionJobId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookRuntimeTemplateResourceName">resetNotebookRuntimeTemplateResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataformRepositorySource` <a name="putDataformRepositorySource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource"></a>

```typescript
public putDataformRepositorySource(value: ColabNotebookExecutionDataformRepositorySource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---

##### `putDirectNotebookSource` <a name="putDirectNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource"></a>

```typescript
public putDirectNotebookSource(value: ColabNotebookExecutionDirectNotebookSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---

##### `putGcsNotebookSource` <a name="putGcsNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource"></a>

```typescript
public putGcsNotebookSource(value: ColabNotebookExecutionGcsNotebookSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts"></a>

```typescript
public putTimeouts(value: ColabNotebookExecutionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

---

##### `resetDataformRepositorySource` <a name="resetDataformRepositorySource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDataformRepositorySource"></a>

```typescript
public resetDataformRepositorySource(): void
```

##### `resetDirectNotebookSource` <a name="resetDirectNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDirectNotebookSource"></a>

```typescript
public resetDirectNotebookSource(): void
```

##### `resetExecutionTimeout` <a name="resetExecutionTimeout" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionTimeout"></a>

```typescript
public resetExecutionTimeout(): void
```

##### `resetExecutionUser` <a name="resetExecutionUser" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionUser"></a>

```typescript
public resetExecutionUser(): void
```

##### `resetGcsNotebookSource` <a name="resetGcsNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetGcsNotebookSource"></a>

```typescript
public resetGcsNotebookSource(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotebookExecutionJobId` <a name="resetNotebookExecutionJobId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookExecutionJobId"></a>

```typescript
public resetNotebookExecutionJobId(): void
```

##### `resetNotebookRuntimeTemplateResourceName` <a name="resetNotebookRuntimeTemplateResourceName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookRuntimeTemplateResourceName"></a>

```typescript
public resetNotebookRuntimeTemplateResourceName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ColabNotebookExecution resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct"></a>

```typescript
import { colabNotebookExecution } from '@cdktf/provider-google'

colabNotebookExecution.ColabNotebookExecution.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement"></a>

```typescript
import { colabNotebookExecution } from '@cdktf/provider-google'

colabNotebookExecution.ColabNotebookExecution.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource"></a>

```typescript
import { colabNotebookExecution } from '@cdktf/provider-google'

colabNotebookExecution.ColabNotebookExecution.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport"></a>

```typescript
import { colabNotebookExecution } from '@cdktf/provider-google'

colabNotebookExecution.ColabNotebookExecution.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ColabNotebookExecution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ColabNotebookExecution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ColabNotebookExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ColabNotebookExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference">ColabNotebookExecutionDataformRepositorySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSource">directNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference">ColabNotebookExecutionDirectNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference">ColabNotebookExecutionGcsNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference">ColabNotebookExecutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySourceInput">dataformRepositorySourceInput</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSourceInput">directNotebookSourceInput</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeoutInput">executionTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUserInput">executionUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSourceInput">gcsNotebookSourceInput</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUriInput">gcsOutputUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobIdInput">notebookExecutionJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput">notebookRuntimeTemplateResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeout">executionTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUser">executionUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUri">gcsOutputUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobId">notebookExecutionJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataformRepositorySource`<sup>Required</sup> <a name="dataformRepositorySource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySource"></a>

```typescript
public readonly dataformRepositorySource: ColabNotebookExecutionDataformRepositorySourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference">ColabNotebookExecutionDataformRepositorySourceOutputReference</a>

---

##### `directNotebookSource`<sup>Required</sup> <a name="directNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSource"></a>

```typescript
public readonly directNotebookSource: ColabNotebookExecutionDirectNotebookSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference">ColabNotebookExecutionDirectNotebookSourceOutputReference</a>

---

##### `gcsNotebookSource`<sup>Required</sup> <a name="gcsNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSource"></a>

```typescript
public readonly gcsNotebookSource: ColabNotebookExecutionGcsNotebookSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference">ColabNotebookExecutionGcsNotebookSourceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeouts"></a>

```typescript
public readonly timeouts: ColabNotebookExecutionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference">ColabNotebookExecutionTimeoutsOutputReference</a>

---

##### `dataformRepositorySourceInput`<sup>Optional</sup> <a name="dataformRepositorySourceInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySourceInput"></a>

```typescript
public readonly dataformRepositorySourceInput: ColabNotebookExecutionDataformRepositorySource;
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---

##### `directNotebookSourceInput`<sup>Optional</sup> <a name="directNotebookSourceInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSourceInput"></a>

```typescript
public readonly directNotebookSourceInput: ColabNotebookExecutionDirectNotebookSource;
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `executionTimeoutInput`<sup>Optional</sup> <a name="executionTimeoutInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeoutInput"></a>

```typescript
public readonly executionTimeoutInput: string;
```

- *Type:* string

---

##### `executionUserInput`<sup>Optional</sup> <a name="executionUserInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUserInput"></a>

```typescript
public readonly executionUserInput: string;
```

- *Type:* string

---

##### `gcsNotebookSourceInput`<sup>Optional</sup> <a name="gcsNotebookSourceInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSourceInput"></a>

```typescript
public readonly gcsNotebookSourceInput: ColabNotebookExecutionGcsNotebookSource;
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---

##### `gcsOutputUriInput`<sup>Optional</sup> <a name="gcsOutputUriInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUriInput"></a>

```typescript
public readonly gcsOutputUriInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `notebookExecutionJobIdInput`<sup>Optional</sup> <a name="notebookExecutionJobIdInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobIdInput"></a>

```typescript
public readonly notebookExecutionJobIdInput: string;
```

- *Type:* string

---

##### `notebookRuntimeTemplateResourceNameInput`<sup>Optional</sup> <a name="notebookRuntimeTemplateResourceNameInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput"></a>

```typescript
public readonly notebookRuntimeTemplateResourceNameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ColabNotebookExecutionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `executionTimeout`<sup>Required</sup> <a name="executionTimeout" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: string;
```

- *Type:* string

---

##### `executionUser`<sup>Required</sup> <a name="executionUser" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUser"></a>

```typescript
public readonly executionUser: string;
```

- *Type:* string

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUri"></a>

```typescript
public readonly gcsOutputUri: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `notebookExecutionJobId`<sup>Required</sup> <a name="notebookExecutionJobId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobId"></a>

```typescript
public readonly notebookExecutionJobId: string;
```

- *Type:* string

---

##### `notebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceName"></a>

```typescript
public readonly notebookRuntimeTemplateResourceName: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecution.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ColabNotebookExecutionConfig <a name="ColabNotebookExecutionConfig" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.Initializer"></a>

```typescript
import { colabNotebookExecution } from '@cdktf/provider-google'

const colabNotebookExecutionConfig: colabNotebookExecution.ColabNotebookExecutionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.displayName">displayName</a></code> | <code>string</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsOutputUri">gcsOutputUri</a></code> | <code>string</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.location">location</a></code> | <code>string</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.directNotebookSource">directNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | direct_notebook_source block. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionTimeout">executionTimeout</a></code> | <code>string</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionUser">executionUser</a></code> | <code>string</code> | The user email to run the execution as. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookExecutionJobId">notebookExecutionJobId</a></code> | <code>string</code> | User specified ID for the Notebook Execution Job. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>string</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The service account to run the execution as. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#display_name ColabNotebookExecution#display_name}

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsOutputUri"></a>

```typescript
public readonly gcsOutputUri: string;
```

- *Type:* string

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#gcs_output_uri ColabNotebookExecution#gcs_output_uri}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#location ColabNotebookExecution#location}

---

##### `dataformRepositorySource`<sup>Optional</sup> <a name="dataformRepositorySource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dataformRepositorySource"></a>

```typescript
public readonly dataformRepositorySource: ColabNotebookExecutionDataformRepositorySource;
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#dataform_repository_source ColabNotebookExecution#dataform_repository_source}

---

##### `directNotebookSource`<sup>Optional</sup> <a name="directNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.directNotebookSource"></a>

```typescript
public readonly directNotebookSource: ColabNotebookExecutionDirectNotebookSource;
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

direct_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#direct_notebook_source ColabNotebookExecution#direct_notebook_source}

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: string;
```

- *Type:* string

Max running time of the execution job in seconds (default 86400s / 24 hrs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#execution_timeout ColabNotebookExecution#execution_timeout}

---

##### `executionUser`<sup>Optional</sup> <a name="executionUser" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionUser"></a>

```typescript
public readonly executionUser: string;
```

- *Type:* string

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#execution_user ColabNotebookExecution#execution_user}

---

##### `gcsNotebookSource`<sup>Optional</sup> <a name="gcsNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsNotebookSource"></a>

```typescript
public readonly gcsNotebookSource: ColabNotebookExecutionGcsNotebookSource;
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#gcs_notebook_source ColabNotebookExecution#gcs_notebook_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notebookExecutionJobId`<sup>Optional</sup> <a name="notebookExecutionJobId" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookExecutionJobId"></a>

```typescript
public readonly notebookExecutionJobId: string;
```

- *Type:* string

User specified ID for the Notebook Execution Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#notebook_execution_job_id ColabNotebookExecution#notebook_execution_job_id}

---

##### `notebookRuntimeTemplateResourceName`<sup>Optional</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName"></a>

```typescript
public readonly notebookRuntimeTemplateResourceName: string;
```

- *Type:* string

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#notebook_runtime_template_resource_name ColabNotebookExecution#notebook_runtime_template_resource_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#service_account ColabNotebookExecution#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ColabNotebookExecutionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#timeouts ColabNotebookExecution#timeouts}

---

### ColabNotebookExecutionDataformRepositorySource <a name="ColabNotebookExecutionDataformRepositorySource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.Initializer"></a>

```typescript
import { colabNotebookExecution } from '@cdktf/provider-google'

const colabNotebookExecutionDataformRepositorySource: colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName">dataformRepositoryResourceName</a></code> | <code>string</code> | The resource name of the Dataform Repository. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.commitSha">commitSha</a></code> | <code>string</code> | The commit SHA to read repository with. If unset, the file will be read at HEAD. |

---

##### `dataformRepositoryResourceName`<sup>Required</sup> <a name="dataformRepositoryResourceName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName"></a>

```typescript
public readonly dataformRepositoryResourceName: string;
```

- *Type:* string

The resource name of the Dataform Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#dataform_repository_resource_name ColabNotebookExecution#dataform_repository_resource_name}

---

##### `commitSha`<sup>Optional</sup> <a name="commitSha" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.commitSha"></a>

```typescript
public readonly commitSha: string;
```

- *Type:* string

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#commit_sha ColabNotebookExecution#commit_sha}

---

### ColabNotebookExecutionDirectNotebookSource <a name="ColabNotebookExecutionDirectNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.Initializer"></a>

```typescript
import { colabNotebookExecution } from '@cdktf/provider-google'

const colabNotebookExecutionDirectNotebookSource: colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.property.content">content</a></code> | <code>string</code> | The base64-encoded contents of the input notebook file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The base64-encoded contents of the input notebook file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#content ColabNotebookExecution#content}

---

### ColabNotebookExecutionGcsNotebookSource <a name="ColabNotebookExecutionGcsNotebookSource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.Initializer"></a>

```typescript
import { colabNotebookExecution } from '@cdktf/provider-google'

const colabNotebookExecutionGcsNotebookSource: colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.uri">uri</a></code> | <code>string</code> | The Cloud Storage uri pointing to the ipynb file. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.generation">generation</a></code> | <code>string</code> | The version of the Cloud Storage object to read. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The Cloud Storage uri pointing to the ipynb file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#uri ColabNotebookExecution#uri}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.generation"></a>

```typescript
public readonly generation: string;
```

- *Type:* string

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#generation ColabNotebookExecution#generation}

---

### ColabNotebookExecutionTimeouts <a name="ColabNotebookExecutionTimeouts" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.Initializer"></a>

```typescript
import { colabNotebookExecution } from '@cdktf/provider-google'

const colabNotebookExecutionTimeouts: colabNotebookExecution.ColabNotebookExecutionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#create ColabNotebookExecution#create}. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#delete ColabNotebookExecution#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#create ColabNotebookExecution#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/colab_notebook_execution#delete ColabNotebookExecution#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ColabNotebookExecutionDataformRepositorySourceOutputReference <a name="ColabNotebookExecutionDataformRepositorySourceOutputReference" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer"></a>

```typescript
import { colabNotebookExecution } from '@cdktf/provider-google'

new colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha">resetCommitSha</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommitSha` <a name="resetCommitSha" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha"></a>

```typescript
public resetCommitSha(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput">commitShaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput">dataformRepositoryResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha">commitSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName">dataformRepositoryResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitShaInput`<sup>Optional</sup> <a name="commitShaInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput"></a>

```typescript
public readonly commitShaInput: string;
```

- *Type:* string

---

##### `dataformRepositoryResourceNameInput`<sup>Optional</sup> <a name="dataformRepositoryResourceNameInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput"></a>

```typescript
public readonly dataformRepositoryResourceNameInput: string;
```

- *Type:* string

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha"></a>

```typescript
public readonly commitSha: string;
```

- *Type:* string

---

##### `dataformRepositoryResourceName`<sup>Required</sup> <a name="dataformRepositoryResourceName" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName"></a>

```typescript
public readonly dataformRepositoryResourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ColabNotebookExecutionDataformRepositorySource;
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---


### ColabNotebookExecutionDirectNotebookSourceOutputReference <a name="ColabNotebookExecutionDirectNotebookSourceOutputReference" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer"></a>

```typescript
import { colabNotebookExecution } from '@cdktf/provider-google'

new colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ColabNotebookExecutionDirectNotebookSource;
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---


### ColabNotebookExecutionGcsNotebookSourceOutputReference <a name="ColabNotebookExecutionGcsNotebookSourceOutputReference" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer"></a>

```typescript
import { colabNotebookExecution } from '@cdktf/provider-google'

new colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration">resetGeneration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGeneration` <a name="resetGeneration" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration"></a>

```typescript
public resetGeneration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput">generationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation">generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generationInput`<sup>Optional</sup> <a name="generationInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput"></a>

```typescript
public readonly generationInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation"></a>

```typescript
public readonly generation: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ColabNotebookExecutionGcsNotebookSource;
```

- *Type:* <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---


### ColabNotebookExecutionTimeoutsOutputReference <a name="ColabNotebookExecutionTimeoutsOutputReference" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer"></a>

```typescript
import { colabNotebookExecution } from '@cdktf/provider-google'

new colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ColabNotebookExecutionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

---



