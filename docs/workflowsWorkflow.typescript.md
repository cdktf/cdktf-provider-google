# `workflowsWorkflow` Submodule <a name="`workflowsWorkflow` Submodule" id="@cdktf/provider-google.workflowsWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkflowsWorkflow <a name="WorkflowsWorkflow" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow google_workflows_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer"></a>

```typescript
import { workflowsWorkflow } from '@cdktf/provider-google'

new workflowsWorkflow.WorkflowsWorkflow(scope: Construct, id: string, config?: WorkflowsWorkflowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig">WorkflowsWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig">WorkflowsWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetCallLogLevel">resetCallLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetCryptoKeyName">resetCryptoKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetSourceContents">resetSourceContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetUserEnvVars">resetUserEnvVars</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.putTimeouts"></a>

```typescript
public putTimeouts(value: WorkflowsWorkflowTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>

---

##### `resetCallLogLevel` <a name="resetCallLogLevel" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetCallLogLevel"></a>

```typescript
public resetCallLogLevel(): void
```

##### `resetCryptoKeyName` <a name="resetCryptoKeyName" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetCryptoKeyName"></a>

```typescript
public resetCryptoKeyName(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetSourceContents` <a name="resetSourceContents" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetSourceContents"></a>

```typescript
public resetSourceContents(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserEnvVars` <a name="resetUserEnvVars" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.resetUserEnvVars"></a>

```typescript
public resetUserEnvVars(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkflowsWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isConstruct"></a>

```typescript
import { workflowsWorkflow } from '@cdktf/provider-google'

workflowsWorkflow.WorkflowsWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformElement"></a>

```typescript
import { workflowsWorkflow } from '@cdktf/provider-google'

workflowsWorkflow.WorkflowsWorkflow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformResource"></a>

```typescript
import { workflowsWorkflow } from '@cdktf/provider-google'

workflowsWorkflow.WorkflowsWorkflow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.generateConfigForImport"></a>

```typescript
import { workflowsWorkflow } from '@cdktf/provider-google'

workflowsWorkflow.WorkflowsWorkflow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WorkflowsWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkflowsWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkflowsWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkflowsWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.revisionId">revisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference">WorkflowsWorkflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.callLogLevelInput">callLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.cryptoKeyNameInput">cryptoKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.sourceContentsInput">sourceContentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.userEnvVarsInput">userEnvVarsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.callLogLevel">callLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.cryptoKeyName">cryptoKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.sourceContents">sourceContents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.userEnvVars">userEnvVars</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.timeouts"></a>

```typescript
public readonly timeouts: WorkflowsWorkflowTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference">WorkflowsWorkflowTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `callLogLevelInput`<sup>Optional</sup> <a name="callLogLevelInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.callLogLevelInput"></a>

```typescript
public readonly callLogLevelInput: string;
```

- *Type:* string

---

##### `cryptoKeyNameInput`<sup>Optional</sup> <a name="cryptoKeyNameInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.cryptoKeyNameInput"></a>

```typescript
public readonly cryptoKeyNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `sourceContentsInput`<sup>Optional</sup> <a name="sourceContentsInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.sourceContentsInput"></a>

```typescript
public readonly sourceContentsInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WorkflowsWorkflowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>

---

##### `userEnvVarsInput`<sup>Optional</sup> <a name="userEnvVarsInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.userEnvVarsInput"></a>

```typescript
public readonly userEnvVarsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `callLogLevel`<sup>Required</sup> <a name="callLogLevel" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.callLogLevel"></a>

```typescript
public readonly callLogLevel: string;
```

- *Type:* string

---

##### `cryptoKeyName`<sup>Required</sup> <a name="cryptoKeyName" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.cryptoKeyName"></a>

```typescript
public readonly cryptoKeyName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `sourceContents`<sup>Required</sup> <a name="sourceContents" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.sourceContents"></a>

```typescript
public readonly sourceContents: string;
```

- *Type:* string

---

##### `userEnvVars`<sup>Required</sup> <a name="userEnvVars" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.userEnvVars"></a>

```typescript
public readonly userEnvVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkflowsWorkflowConfig <a name="WorkflowsWorkflowConfig" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.Initializer"></a>

```typescript
import { workflowsWorkflow } from '@cdktf/provider-google'

const workflowsWorkflowConfig: workflowsWorkflow.WorkflowsWorkflowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.callLogLevel">callLogLevel</a></code> | <code>string</code> | Describes the level of platform logging to apply to calls and call responses during executions of this workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.cryptoKeyName">cryptoKeyName</a></code> | <code>string</code> | The KMS key used to encrypt workflow and execution data. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.description">description</a></code> | <code>string</code> | Description of the workflow provided by the user. Must be at most 1000 unicode characters long. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#id WorkflowsWorkflow#id}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to this Workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.name">name</a></code> | <code>string</code> | Name of the Workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#name_prefix WorkflowsWorkflow#name_prefix}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#project WorkflowsWorkflow#project}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.region">region</a></code> | <code>string</code> | The region of the workflow. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Name of the service account associated with the latest workflow version. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.sourceContents">sourceContents</a></code> | <code>string</code> | Workflow code to be executed. The size limit is 128KB. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.userEnvVars">userEnvVars</a></code> | <code>{[ key: string ]: string}</code> | User-defined environment variables associated with this workflow revision. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `callLogLevel`<sup>Optional</sup> <a name="callLogLevel" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.callLogLevel"></a>

```typescript
public readonly callLogLevel: string;
```

- *Type:* string

Describes the level of platform logging to apply to calls and call responses during executions of this workflow.

If both the workflow and the execution specify a logging level,
the execution level takes precedence. Possible values: ["CALL_LOG_LEVEL_UNSPECIFIED", "LOG_ALL_CALLS", "LOG_ERRORS_ONLY", "LOG_NONE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#call_log_level WorkflowsWorkflow#call_log_level}

---

##### `cryptoKeyName`<sup>Optional</sup> <a name="cryptoKeyName" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.cryptoKeyName"></a>

```typescript
public readonly cryptoKeyName: string;
```

- *Type:* string

The KMS key used to encrypt workflow and execution data.

Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#crypto_key_name WorkflowsWorkflow#crypto_key_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the workflow provided by the user. Must be at most 1000 unicode characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#description WorkflowsWorkflow#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#id WorkflowsWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to this Workflow.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#labels WorkflowsWorkflow#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#name WorkflowsWorkflow#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#name_prefix WorkflowsWorkflow#name_prefix}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#project WorkflowsWorkflow#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#region WorkflowsWorkflow#region}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Name of the service account associated with the latest workflow version.

This service
account represents the identity of the workflow and determines what permissions the workflow has.
Format: projects/{project}/serviceAccounts/{account} or {account}.
Using - as a wildcard for the {project} or not providing one at all will infer the project from the account.
The {account} value can be the email address or the unique_id of the service account.
If not provided, workflow will use the project's default service account.
Modifying this field for an existing workflow results in a new workflow revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#service_account WorkflowsWorkflow#service_account}

---

##### `sourceContents`<sup>Optional</sup> <a name="sourceContents" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.sourceContents"></a>

```typescript
public readonly sourceContents: string;
```

- *Type:* string

Workflow code to be executed. The size limit is 128KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#source_contents WorkflowsWorkflow#source_contents}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WorkflowsWorkflowTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#timeouts WorkflowsWorkflow#timeouts}

---

##### `userEnvVars`<sup>Optional</sup> <a name="userEnvVars" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowConfig.property.userEnvVars"></a>

```typescript
public readonly userEnvVars: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined environment variables associated with this workflow revision.

This map has a maximum length of 20. Each string can take up to 4KiB. Keys cannot be empty strings and cannot start with “GOOGLE” or “WORKFLOWS".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#user_env_vars WorkflowsWorkflow#user_env_vars}

---

### WorkflowsWorkflowTimeouts <a name="WorkflowsWorkflowTimeouts" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.Initializer"></a>

```typescript
import { workflowsWorkflow } from '@cdktf/provider-google'

const workflowsWorkflowTimeouts: workflowsWorkflow.WorkflowsWorkflowTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#create WorkflowsWorkflow#create}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#delete WorkflowsWorkflow#delete}. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#update WorkflowsWorkflow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#create WorkflowsWorkflow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#delete WorkflowsWorkflow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/workflows_workflow#update WorkflowsWorkflow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkflowsWorkflowTimeoutsOutputReference <a name="WorkflowsWorkflowTimeoutsOutputReference" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.Initializer"></a>

```typescript
import { workflowsWorkflow } from '@cdktf/provider-google'

new workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkflowsWorkflowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.workflowsWorkflow.WorkflowsWorkflowTimeouts">WorkflowsWorkflowTimeouts</a>

---



