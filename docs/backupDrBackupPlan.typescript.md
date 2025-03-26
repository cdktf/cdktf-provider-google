# `backupDrBackupPlan` Submodule <a name="`backupDrBackupPlan` Submodule" id="@cdktf/provider-google.backupDrBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrBackupPlan <a name="BackupDrBackupPlan" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan google_backup_dr_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

new backupDrBackupPlan.BackupDrBackupPlan(scope: Construct, id: string, config: BackupDrBackupPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig">BackupDrBackupPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig">BackupDrBackupPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.putBackupRules">putBackupRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupRules` <a name="putBackupRules" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.putBackupRules"></a>

```typescript
public putBackupRules(value: IResolvable | BackupDrBackupPlanBackupRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.putBackupRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.putTimeouts"></a>

```typescript
public putTimeouts(value: BackupDrBackupPlanTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts">BackupDrBackupPlanTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BackupDrBackupPlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isConstruct"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

backupDrBackupPlan.BackupDrBackupPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isTerraformElement"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

backupDrBackupPlan.BackupDrBackupPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isTerraformResource"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

backupDrBackupPlan.BackupDrBackupPlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.generateConfigForImport"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

backupDrBackupPlan.BackupDrBackupPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BackupDrBackupPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupDrBackupPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupDrBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupDrBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupRules">backupRules</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList">BackupDrBackupPlanBackupRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupVaultServiceAccount">backupVaultServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference">BackupDrBackupPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupPlanIdInput">backupPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupRulesInput">backupRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupVaultInput">backupVaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts">BackupDrBackupPlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupPlanId">backupPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupVault">backupVault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupRules`<sup>Required</sup> <a name="backupRules" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupRules"></a>

```typescript
public readonly backupRules: BackupDrBackupPlanBackupRulesList;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList">BackupDrBackupPlanBackupRulesList</a>

---

##### `backupVaultServiceAccount`<sup>Required</sup> <a name="backupVaultServiceAccount" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupVaultServiceAccount"></a>

```typescript
public readonly backupVaultServiceAccount: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.timeouts"></a>

```typescript
public readonly timeouts: BackupDrBackupPlanTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference">BackupDrBackupPlanTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `backupPlanIdInput`<sup>Optional</sup> <a name="backupPlanIdInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupPlanIdInput"></a>

```typescript
public readonly backupPlanIdInput: string;
```

- *Type:* string

---

##### `backupRulesInput`<sup>Optional</sup> <a name="backupRulesInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupRulesInput"></a>

```typescript
public readonly backupRulesInput: IResolvable | BackupDrBackupPlanBackupRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>[]

---

##### `backupVaultInput`<sup>Optional</sup> <a name="backupVaultInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupVaultInput"></a>

```typescript
public readonly backupVaultInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BackupDrBackupPlanTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts">BackupDrBackupPlanTimeouts</a>

---

##### `backupPlanId`<sup>Required</sup> <a name="backupPlanId" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupPlanId"></a>

```typescript
public readonly backupPlanId: string;
```

- *Type:* string

---

##### `backupVault`<sup>Required</sup> <a name="backupVault" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.backupVault"></a>

```typescript
public readonly backupVault: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrBackupPlanBackupRules <a name="BackupDrBackupPlanBackupRules" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules.Initializer"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

const backupDrBackupPlanBackupRules: backupDrBackupPlan.BackupDrBackupPlanBackupRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules.property.backupRetentionDays">backupRetentionDays</a></code> | <code>number</code> | Configures the duration for which backup data will be kept. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules.property.ruleId">ruleId</a></code> | <code>string</code> | The unique ID of this 'BackupRule'. The 'rule_id' is unique per 'BackupPlan'. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules.property.standardSchedule">standardSchedule</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule">BackupDrBackupPlanBackupRulesStandardSchedule</a></code> | standard_schedule block. |

---

##### `backupRetentionDays`<sup>Required</sup> <a name="backupRetentionDays" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules.property.backupRetentionDays"></a>

```typescript
public readonly backupRetentionDays: number;
```

- *Type:* number

Configures the duration for which backup data will be kept.

The value should be greater than or equal to minimum enforced retention of the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#backup_retention_days BackupDrBackupPlan#backup_retention_days}

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The unique ID of this 'BackupRule'. The 'rule_id' is unique per 'BackupPlan'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#rule_id BackupDrBackupPlan#rule_id}

---

##### `standardSchedule`<sup>Required</sup> <a name="standardSchedule" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules.property.standardSchedule"></a>

```typescript
public readonly standardSchedule: BackupDrBackupPlanBackupRulesStandardSchedule;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule">BackupDrBackupPlanBackupRulesStandardSchedule</a>

standard_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#standard_schedule BackupDrBackupPlan#standard_schedule}

---

### BackupDrBackupPlanBackupRulesStandardSchedule <a name="BackupDrBackupPlanBackupRulesStandardSchedule" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.Initializer"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

const backupDrBackupPlanBackupRulesStandardSchedule: backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.recurrenceType">recurrenceType</a></code> | <code>string</code> | RecurrenceType enumerates the applicable periodicity for the schedule. Possible values: ["HOURLY", "DAILY", "WEEKLY", "MONTHLY", "YEARLY"]. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.timeZone">timeZone</a></code> | <code>string</code> | The time zone to be used when interpreting the schedule. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.backupWindow">backupWindow</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a></code> | backup_window block. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.daysOfMonth">daysOfMonth</a></code> | <code>number[]</code> | Specifies days of months like 1, 5, or 14 on which jobs will run. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | Specifies days of week like MONDAY or TUESDAY, on which jobs will run. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.hourlyFrequency">hourlyFrequency</a></code> | <code>number</code> | Specifies frequency for hourly backups. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.months">months</a></code> | <code>string[]</code> | Specifies values of months Possible values: ["MONTH_UNSPECIFIED", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.weekDayOfMonth">weekDayOfMonth</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a></code> | week_day_of_month block. |

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.recurrenceType"></a>

```typescript
public readonly recurrenceType: string;
```

- *Type:* string

RecurrenceType enumerates the applicable periodicity for the schedule. Possible values: ["HOURLY", "DAILY", "WEEKLY", "MONTHLY", "YEARLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#recurrence_type BackupDrBackupPlan#recurrence_type}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The time zone to be used when interpreting the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#time_zone BackupDrBackupPlan#time_zone}

---

##### `backupWindow`<sup>Optional</sup> <a name="backupWindow" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.backupWindow"></a>

```typescript
public readonly backupWindow: BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a>

backup_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#backup_window BackupDrBackupPlan#backup_window}

---

##### `daysOfMonth`<sup>Optional</sup> <a name="daysOfMonth" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.daysOfMonth"></a>

```typescript
public readonly daysOfMonth: number[];
```

- *Type:* number[]

Specifies days of months like 1, 5, or 14 on which jobs will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#days_of_month BackupDrBackupPlan#days_of_month}

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

Specifies days of week like MONDAY or TUESDAY, on which jobs will run.

This is required for 'recurrence_type', 'WEEKLY' and is not applicable otherwise. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#days_of_week BackupDrBackupPlan#days_of_week}

---

##### `hourlyFrequency`<sup>Optional</sup> <a name="hourlyFrequency" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.hourlyFrequency"></a>

```typescript
public readonly hourlyFrequency: number;
```

- *Type:* number

Specifies frequency for hourly backups.

An hourly frequency of 2 means jobs will run every 2 hours from start time till end time defined.
This is required for 'recurrence_type', 'HOURLY' and is not applicable otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#hourly_frequency BackupDrBackupPlan#hourly_frequency}

---

##### `months`<sup>Optional</sup> <a name="months" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

Specifies values of months Possible values: ["MONTH_UNSPECIFIED", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#months BackupDrBackupPlan#months}

---

##### `weekDayOfMonth`<sup>Optional</sup> <a name="weekDayOfMonth" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule.property.weekDayOfMonth"></a>

```typescript
public readonly weekDayOfMonth: BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a>

week_day_of_month block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#week_day_of_month BackupDrBackupPlan#week_day_of_month}

---

### BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow <a name="BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.Initializer"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

const backupDrBackupPlanBackupRulesStandardScheduleBackupWindow: backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.property.startHourOfDay">startHourOfDay</a></code> | <code>number</code> | The hour of the day (0-23) when the window starts, for example, if the value of the start hour of the day is 6, that means the backup window starts at 6:00. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.property.endHourOfDay">endHourOfDay</a></code> | <code>number</code> | The hour of the day (1-24) when the window ends, for example, if the value of end hour of the day is 10, that means the backup window end time is 10:00. |

---

##### `startHourOfDay`<sup>Required</sup> <a name="startHourOfDay" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.property.startHourOfDay"></a>

```typescript
public readonly startHourOfDay: number;
```

- *Type:* number

The hour of the day (0-23) when the window starts, for example, if the value of the start hour of the day is 6, that means the backup window starts at 6:00.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#start_hour_of_day BackupDrBackupPlan#start_hour_of_day}

---

##### `endHourOfDay`<sup>Optional</sup> <a name="endHourOfDay" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.property.endHourOfDay"></a>

```typescript
public readonly endHourOfDay: number;
```

- *Type:* number

The hour of the day (1-24) when the window ends, for example, if the value of end hour of the day is 10, that means the backup window end time is 10:00.

The end hour of the day should be greater than the start

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#end_hour_of_day BackupDrBackupPlan#end_hour_of_day}

---

### BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth <a name="BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.Initializer"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

const backupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth: backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Specifies the day of the week. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.property.weekOfMonth">weekOfMonth</a></code> | <code>string</code> | WeekOfMonth enumerates possible weeks in the month, e.g. the first, third, or last week of the month. Possible values: ["WEEK_OF_MONTH_UNSPECIFIED", "FIRST", "SECOND", "THIRD", "FOURTH", "LAST"]. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Specifies the day of the week. Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#day_of_week BackupDrBackupPlan#day_of_week}

---

##### `weekOfMonth`<sup>Required</sup> <a name="weekOfMonth" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.property.weekOfMonth"></a>

```typescript
public readonly weekOfMonth: string;
```

- *Type:* string

WeekOfMonth enumerates possible weeks in the month, e.g. the first, third, or last week of the month. Possible values: ["WEEK_OF_MONTH_UNSPECIFIED", "FIRST", "SECOND", "THIRD", "FOURTH", "LAST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#week_of_month BackupDrBackupPlan#week_of_month}

---

### BackupDrBackupPlanConfig <a name="BackupDrBackupPlanConfig" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.Initializer"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

const backupDrBackupPlanConfig: backupDrBackupPlan.BackupDrBackupPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.backupPlanId">backupPlanId</a></code> | <code>string</code> | The ID of the backup plan. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.backupRules">backupRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>[]</code> | backup_rules block. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.backupVault">backupVault</a></code> | <code>string</code> | Backup vault where the backups gets stored using this Backup plan. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.location">location</a></code> | <code>string</code> | The location for the backup plan. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.resourceType">resourceType</a></code> | <code>string</code> | The resource type to which the 'BackupPlan' will be applied. Examples include, "compute.googleapis.com/Instance" and "storage.googleapis.com/Bucket". |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.description">description</a></code> | <code>string</code> | The description allows for additional details about 'BackupPlan' and its use cases to be provided. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#id BackupDrBackupPlan#id}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#project BackupDrBackupPlan#project}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts">BackupDrBackupPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupPlanId`<sup>Required</sup> <a name="backupPlanId" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.backupPlanId"></a>

```typescript
public readonly backupPlanId: string;
```

- *Type:* string

The ID of the backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#backup_plan_id BackupDrBackupPlan#backup_plan_id}

---

##### `backupRules`<sup>Required</sup> <a name="backupRules" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.backupRules"></a>

```typescript
public readonly backupRules: IResolvable | BackupDrBackupPlanBackupRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>[]

backup_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#backup_rules BackupDrBackupPlan#backup_rules}

---

##### `backupVault`<sup>Required</sup> <a name="backupVault" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.backupVault"></a>

```typescript
public readonly backupVault: string;
```

- *Type:* string

Backup vault where the backups gets stored using this Backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#backup_vault BackupDrBackupPlan#backup_vault}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#location BackupDrBackupPlan#location}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The resource type to which the 'BackupPlan' will be applied. Examples include, "compute.googleapis.com/Instance" and "storage.googleapis.com/Bucket".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#resource_type BackupDrBackupPlan#resource_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description allows for additional details about 'BackupPlan' and its use cases to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#description BackupDrBackupPlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#id BackupDrBackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#project BackupDrBackupPlan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BackupDrBackupPlanTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts">BackupDrBackupPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#timeouts BackupDrBackupPlan#timeouts}

---

### BackupDrBackupPlanTimeouts <a name="BackupDrBackupPlanTimeouts" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts.Initializer"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

const backupDrBackupPlanTimeouts: backupDrBackupPlan.BackupDrBackupPlanTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#create BackupDrBackupPlan#create}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#delete BackupDrBackupPlan#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#create BackupDrBackupPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/backup_dr_backup_plan#delete BackupDrBackupPlan#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrBackupPlanBackupRulesList <a name="BackupDrBackupPlanBackupRulesList" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.Initializer"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

new backupDrBackupPlan.BackupDrBackupPlanBackupRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.get"></a>

```typescript
public get(index: number): BackupDrBackupPlanBackupRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupDrBackupPlanBackupRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>[]

---


### BackupDrBackupPlanBackupRulesOutputReference <a name="BackupDrBackupPlanBackupRulesOutputReference" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

new backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.putStandardSchedule">putStandardSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStandardSchedule` <a name="putStandardSchedule" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.putStandardSchedule"></a>

```typescript
public putStandardSchedule(value: BackupDrBackupPlanBackupRulesStandardSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.putStandardSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule">BackupDrBackupPlanBackupRulesStandardSchedule</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.standardSchedule">standardSchedule</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference">BackupDrBackupPlanBackupRulesStandardScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.backupRetentionDaysInput">backupRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.standardScheduleInput">standardScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule">BackupDrBackupPlanBackupRulesStandardSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.backupRetentionDays">backupRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `standardSchedule`<sup>Required</sup> <a name="standardSchedule" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.standardSchedule"></a>

```typescript
public readonly standardSchedule: BackupDrBackupPlanBackupRulesStandardScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference">BackupDrBackupPlanBackupRulesStandardScheduleOutputReference</a>

---

##### `backupRetentionDaysInput`<sup>Optional</sup> <a name="backupRetentionDaysInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.backupRetentionDaysInput"></a>

```typescript
public readonly backupRetentionDaysInput: number;
```

- *Type:* number

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `standardScheduleInput`<sup>Optional</sup> <a name="standardScheduleInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.standardScheduleInput"></a>

```typescript
public readonly standardScheduleInput: BackupDrBackupPlanBackupRulesStandardSchedule;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule">BackupDrBackupPlanBackupRulesStandardSchedule</a>

---

##### `backupRetentionDays`<sup>Required</sup> <a name="backupRetentionDays" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.backupRetentionDays"></a>

```typescript
public readonly backupRetentionDays: number;
```

- *Type:* number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupDrBackupPlanBackupRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRules">BackupDrBackupPlanBackupRules</a>

---


### BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference <a name="BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

new backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resetEndHourOfDay">resetEndHourOfDay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndHourOfDay` <a name="resetEndHourOfDay" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resetEndHourOfDay"></a>

```typescript
public resetEndHourOfDay(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.endHourOfDayInput">endHourOfDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.startHourOfDayInput">startHourOfDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.endHourOfDay">endHourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.startHourOfDay">startHourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endHourOfDayInput`<sup>Optional</sup> <a name="endHourOfDayInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.endHourOfDayInput"></a>

```typescript
public readonly endHourOfDayInput: number;
```

- *Type:* number

---

##### `startHourOfDayInput`<sup>Optional</sup> <a name="startHourOfDayInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.startHourOfDayInput"></a>

```typescript
public readonly startHourOfDayInput: number;
```

- *Type:* number

---

##### `endHourOfDay`<sup>Required</sup> <a name="endHourOfDay" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.endHourOfDay"></a>

```typescript
public readonly endHourOfDay: number;
```

- *Type:* number

---

##### `startHourOfDay`<sup>Required</sup> <a name="startHourOfDay" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.startHourOfDay"></a>

```typescript
public readonly startHourOfDay: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a>

---


### BackupDrBackupPlanBackupRulesStandardScheduleOutputReference <a name="BackupDrBackupPlanBackupRulesStandardScheduleOutputReference" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

new backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putBackupWindow">putBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putWeekDayOfMonth">putWeekDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetBackupWindow">resetBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetDaysOfMonth">resetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetHourlyFrequency">resetHourlyFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetMonths">resetMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetWeekDayOfMonth">resetWeekDayOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupWindow` <a name="putBackupWindow" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putBackupWindow"></a>

```typescript
public putBackupWindow(value: BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putBackupWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a>

---

##### `putWeekDayOfMonth` <a name="putWeekDayOfMonth" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putWeekDayOfMonth"></a>

```typescript
public putWeekDayOfMonth(value: BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.putWeekDayOfMonth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a>

---

##### `resetBackupWindow` <a name="resetBackupWindow" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetBackupWindow"></a>

```typescript
public resetBackupWindow(): void
```

##### `resetDaysOfMonth` <a name="resetDaysOfMonth" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetDaysOfMonth"></a>

```typescript
public resetDaysOfMonth(): void
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetDaysOfWeek"></a>

```typescript
public resetDaysOfWeek(): void
```

##### `resetHourlyFrequency` <a name="resetHourlyFrequency" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetHourlyFrequency"></a>

```typescript
public resetHourlyFrequency(): void
```

##### `resetMonths` <a name="resetMonths" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetMonths"></a>

```typescript
public resetMonths(): void
```

##### `resetWeekDayOfMonth` <a name="resetWeekDayOfMonth" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resetWeekDayOfMonth"></a>

```typescript
public resetWeekDayOfMonth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.backupWindow">backupWindow</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.weekDayOfMonth">weekDayOfMonth</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.backupWindowInput">backupWindowInput</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfMonthInput">daysOfMonthInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.hourlyFrequencyInput">hourlyFrequencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.monthsInput">monthsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.recurrenceTypeInput">recurrenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.weekDayOfMonthInput">weekDayOfMonthInput</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfMonth">daysOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.hourlyFrequency">hourlyFrequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.months">months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.recurrenceType">recurrenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule">BackupDrBackupPlanBackupRulesStandardSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupWindow`<sup>Required</sup> <a name="backupWindow" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.backupWindow"></a>

```typescript
public readonly backupWindow: BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference</a>

---

##### `weekDayOfMonth`<sup>Required</sup> <a name="weekDayOfMonth" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.weekDayOfMonth"></a>

```typescript
public readonly weekDayOfMonth: BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference</a>

---

##### `backupWindowInput`<sup>Optional</sup> <a name="backupWindowInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.backupWindowInput"></a>

```typescript
public readonly backupWindowInput: BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">BackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a>

---

##### `daysOfMonthInput`<sup>Optional</sup> <a name="daysOfMonthInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfMonthInput"></a>

```typescript
public readonly daysOfMonthInput: number[];
```

- *Type:* number[]

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfWeekInput"></a>

```typescript
public readonly daysOfWeekInput: string[];
```

- *Type:* string[]

---

##### `hourlyFrequencyInput`<sup>Optional</sup> <a name="hourlyFrequencyInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.hourlyFrequencyInput"></a>

```typescript
public readonly hourlyFrequencyInput: number;
```

- *Type:* number

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.monthsInput"></a>

```typescript
public readonly monthsInput: string[];
```

- *Type:* string[]

---

##### `recurrenceTypeInput`<sup>Optional</sup> <a name="recurrenceTypeInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.recurrenceTypeInput"></a>

```typescript
public readonly recurrenceTypeInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `weekDayOfMonthInput`<sup>Optional</sup> <a name="weekDayOfMonthInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.weekDayOfMonthInput"></a>

```typescript
public readonly weekDayOfMonthInput: BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a>

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfMonth"></a>

```typescript
public readonly daysOfMonth: number[];
```

- *Type:* number[]

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `hourlyFrequency`<sup>Required</sup> <a name="hourlyFrequency" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.hourlyFrequency"></a>

```typescript
public readonly hourlyFrequency: number;
```

- *Type:* number

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.recurrenceType"></a>

```typescript
public readonly recurrenceType: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupDrBackupPlanBackupRulesStandardSchedule;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardSchedule">BackupDrBackupPlanBackupRulesStandardSchedule</a>

---


### BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference <a name="BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

new backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.weekOfMonthInput">weekOfMonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.weekOfMonth">weekOfMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `weekOfMonthInput`<sup>Optional</sup> <a name="weekOfMonthInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.weekOfMonthInput"></a>

```typescript
public readonly weekOfMonthInput: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `weekOfMonth`<sup>Required</sup> <a name="weekOfMonth" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.weekOfMonth"></a>

```typescript
public readonly weekOfMonth: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">BackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a>

---


### BackupDrBackupPlanTimeoutsOutputReference <a name="BackupDrBackupPlanTimeoutsOutputReference" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.Initializer"></a>

```typescript
import { backupDrBackupPlan } from '@cdktf/provider-google'

new backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts">BackupDrBackupPlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupDrBackupPlanTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.backupDrBackupPlan.BackupDrBackupPlanTimeouts">BackupDrBackupPlanTimeouts</a>

---



