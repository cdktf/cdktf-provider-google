# `backupDrBackupVault` Submodule <a name="`backupDrBackupVault` Submodule" id="@cdktf/provider-google.backupDrBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrBackupVault <a name="BackupDrBackupVault" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault google_backup_dr_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer"></a>

```typescript
import { backupDrBackupVault } from '@cdktf/provider-google'

new backupDrBackupVault.BackupDrBackupVault(scope: Construct, id: string, config: BackupDrBackupVaultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig">BackupDrBackupVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig">BackupDrBackupVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAccessRestriction">resetAccessRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAllowMissing">resetAllowMissing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetBackupRetentionInheritance">resetBackupRetentionInheritance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetEffectiveTime">resetEffectiveTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceUpdate">resetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreBackupPlanReferences">resetIgnoreBackupPlanReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreInactiveDatasources">resetIgnoreInactiveDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts"></a>

```typescript
public putTimeouts(value: BackupDrBackupVaultTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>

---

##### `resetAccessRestriction` <a name="resetAccessRestriction" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAccessRestriction"></a>

```typescript
public resetAccessRestriction(): void
```

##### `resetAllowMissing` <a name="resetAllowMissing" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAllowMissing"></a>

```typescript
public resetAllowMissing(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetBackupRetentionInheritance` <a name="resetBackupRetentionInheritance" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetBackupRetentionInheritance"></a>

```typescript
public resetBackupRetentionInheritance(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEffectiveTime` <a name="resetEffectiveTime" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetEffectiveTime"></a>

```typescript
public resetEffectiveTime(): void
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceDelete"></a>

```typescript
public resetForceDelete(): void
```

##### `resetForceUpdate` <a name="resetForceUpdate" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetForceUpdate"></a>

```typescript
public resetForceUpdate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreBackupPlanReferences` <a name="resetIgnoreBackupPlanReferences" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreBackupPlanReferences"></a>

```typescript
public resetIgnoreBackupPlanReferences(): void
```

##### `resetIgnoreInactiveDatasources` <a name="resetIgnoreInactiveDatasources" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetIgnoreInactiveDatasources"></a>

```typescript
public resetIgnoreInactiveDatasources(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BackupDrBackupVault resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isConstruct"></a>

```typescript
import { backupDrBackupVault } from '@cdktf/provider-google'

backupDrBackupVault.BackupDrBackupVault.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformElement"></a>

```typescript
import { backupDrBackupVault } from '@cdktf/provider-google'

backupDrBackupVault.BackupDrBackupVault.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformResource"></a>

```typescript
import { backupDrBackupVault } from '@cdktf/provider-google'

backupDrBackupVault.BackupDrBackupVault.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport"></a>

```typescript
import { backupDrBackupVault } from '@cdktf/provider-google'

backupDrBackupVault.BackupDrBackupVault.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BackupDrBackupVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupDrBackupVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupDrBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupDrBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupCount">backupCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.deletable">deletable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference">BackupDrBackupVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.totalStoredBytes">totalStoredBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestrictionInput">accessRestrictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissingInput">allowMissingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDurationInput">backupMinimumEnforcedRetentionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupRetentionInheritanceInput">backupRetentionInheritanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultIdInput">backupVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTimeInput">effectiveTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDeleteInput">forceDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdateInput">forceUpdateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferencesInput">ignoreBackupPlanReferencesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasourcesInput">ignoreInactiveDatasourcesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestriction">accessRestriction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissing">allowMissing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration">backupMinimumEnforcedRetentionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupRetentionInheritance">backupRetentionInheritance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultId">backupVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTime">effectiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdate">forceUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferences">ignoreBackupPlanReferences</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasources">ignoreInactiveDatasources</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupCount`<sup>Required</sup> <a name="backupCount" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupCount"></a>

```typescript
public readonly backupCount: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deletable`<sup>Required</sup> <a name="deletable" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.deletable"></a>

```typescript
public readonly deletable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeouts"></a>

```typescript
public readonly timeouts: BackupDrBackupVaultTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference">BackupDrBackupVaultTimeoutsOutputReference</a>

---

##### `totalStoredBytes`<sup>Required</sup> <a name="totalStoredBytes" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.totalStoredBytes"></a>

```typescript
public readonly totalStoredBytes: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `accessRestrictionInput`<sup>Optional</sup> <a name="accessRestrictionInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestrictionInput"></a>

```typescript
public readonly accessRestrictionInput: string;
```

- *Type:* string

---

##### `allowMissingInput`<sup>Optional</sup> <a name="allowMissingInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissingInput"></a>

```typescript
public readonly allowMissingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `backupMinimumEnforcedRetentionDurationInput`<sup>Optional</sup> <a name="backupMinimumEnforcedRetentionDurationInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDurationInput"></a>

```typescript
public readonly backupMinimumEnforcedRetentionDurationInput: string;
```

- *Type:* string

---

##### `backupRetentionInheritanceInput`<sup>Optional</sup> <a name="backupRetentionInheritanceInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupRetentionInheritanceInput"></a>

```typescript
public readonly backupRetentionInheritanceInput: string;
```

- *Type:* string

---

##### `backupVaultIdInput`<sup>Optional</sup> <a name="backupVaultIdInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultIdInput"></a>

```typescript
public readonly backupVaultIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `effectiveTimeInput`<sup>Optional</sup> <a name="effectiveTimeInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTimeInput"></a>

```typescript
public readonly effectiveTimeInput: string;
```

- *Type:* string

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDeleteInput"></a>

```typescript
public readonly forceDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="forceUpdateInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdateInput"></a>

```typescript
public readonly forceUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreBackupPlanReferencesInput`<sup>Optional</sup> <a name="ignoreBackupPlanReferencesInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferencesInput"></a>

```typescript
public readonly ignoreBackupPlanReferencesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreInactiveDatasourcesInput`<sup>Optional</sup> <a name="ignoreInactiveDatasourcesInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasourcesInput"></a>

```typescript
public readonly ignoreInactiveDatasourcesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BackupDrBackupVaultTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>

---

##### `accessRestriction`<sup>Required</sup> <a name="accessRestriction" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.accessRestriction"></a>

```typescript
public readonly accessRestriction: string;
```

- *Type:* string

---

##### `allowMissing`<sup>Required</sup> <a name="allowMissing" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.allowMissing"></a>

```typescript
public readonly allowMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `backupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="backupMinimumEnforcedRetentionDuration" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration"></a>

```typescript
public readonly backupMinimumEnforcedRetentionDuration: string;
```

- *Type:* string

---

##### `backupRetentionInheritance`<sup>Required</sup> <a name="backupRetentionInheritance" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupRetentionInheritance"></a>

```typescript
public readonly backupRetentionInheritance: string;
```

- *Type:* string

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.backupVaultId"></a>

```typescript
public readonly backupVaultId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `effectiveTime`<sup>Required</sup> <a name="effectiveTime" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.effectiveTime"></a>

```typescript
public readonly effectiveTime: string;
```

- *Type:* string

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceUpdate`<sup>Required</sup> <a name="forceUpdate" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreBackupPlanReferences`<sup>Required</sup> <a name="ignoreBackupPlanReferences" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreBackupPlanReferences"></a>

```typescript
public readonly ignoreBackupPlanReferences: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreInactiveDatasources`<sup>Required</sup> <a name="ignoreInactiveDatasources" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.ignoreInactiveDatasources"></a>

```typescript
public readonly ignoreInactiveDatasources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVault.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrBackupVaultConfig <a name="BackupDrBackupVaultConfig" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.Initializer"></a>

```typescript
import { backupDrBackupVault } from '@cdktf/provider-google'

const backupDrBackupVaultConfig: backupDrBackupVault.BackupDrBackupVaultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupMinimumEnforcedRetentionDuration">backupMinimumEnforcedRetentionDuration</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupVaultId">backupVaultId</a></code> | <code>string</code> | Required. ID of the requesting object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.location">location</a></code> | <code>string</code> | The GCP location for the backup vault. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.accessRestriction">accessRestriction</a></code> | <code>string</code> | Access restriction for the backup vault. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.allowMissing">allowMissing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupRetentionInheritance">backupRetentionInheritance</a></code> | <code>string</code> | How a backup's enforced retention end time is inherited. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.description">description</a></code> | <code>string</code> | Optional. The description of the BackupVault instance (2048 characters or less). |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.effectiveTime">effectiveTime</a></code> | <code>string</code> | Optional. Time after which the BackupVault resource is locked. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceUpdate">forceUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, allow update to extend the minimum enforced retention for backup vault. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#id BackupDrBackupVault#id}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreBackupPlanReferences">ignoreBackupPlanReferences</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreInactiveDatasources">ignoreInactiveDatasources</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#project BackupDrBackupVault#project}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="backupMinimumEnforcedRetentionDuration" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupMinimumEnforcedRetentionDuration"></a>

```typescript
public readonly backupMinimumEnforcedRetentionDuration: string;
```

- *Type:* string

Required.

The default and minimum enforced retention for each backup within the backup vault. The enforced retention for each backup can be extended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#backup_minimum_enforced_retention_duration BackupDrBackupVault#backup_minimum_enforced_retention_duration}

---

##### `backupVaultId`<sup>Required</sup> <a name="backupVaultId" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupVaultId"></a>

```typescript
public readonly backupVaultId: string;
```

- *Type:* string

Required. ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#backup_vault_id BackupDrBackupVault#backup_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The GCP location for the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#location BackupDrBackupVault#location}

---

##### `accessRestriction`<sup>Optional</sup> <a name="accessRestriction" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.accessRestriction"></a>

```typescript
public readonly accessRestriction: string;
```

- *Type:* string

Access restriction for the backup vault.

Default value is 'WITHIN_ORGANIZATION' if not provided during creation. Default value: "WITHIN_ORGANIZATION" Possible values: ["ACCESS_RESTRICTION_UNSPECIFIED", "WITHIN_PROJECT", "WITHIN_ORGANIZATION", "UNRESTRICTED", "WITHIN_ORG_BUT_UNRESTRICTED_FOR_BA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#access_restriction BackupDrBackupVault#access_restriction}

---

##### `allowMissing`<sup>Optional</sup> <a name="allowMissing" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.allowMissing"></a>

```typescript
public readonly allowMissing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow idempotent deletion of backup vault. The request will still succeed in case the backup vault does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#allow_missing BackupDrBackupVault#allow_missing}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. User annotations. See https://google.aip.dev/128#annotations Stores small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#annotations BackupDrBackupVault#annotations}

---

##### `backupRetentionInheritance`<sup>Optional</sup> <a name="backupRetentionInheritance" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.backupRetentionInheritance"></a>

```typescript
public readonly backupRetentionInheritance: string;
```

- *Type:* string

How a backup's enforced retention end time is inherited.

Default value is 'INHERIT_VAULT_RETENTION' if not provided during creation. Possible values: ["BACKUP_RETENTION_INHERITANCE_UNSPECIFIED", "INHERIT_VAULT_RETENTION", "MATCH_BACKUP_EXPIRE_TIME"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#backup_retention_inheritance BackupDrBackupVault#backup_retention_inheritance}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. The description of the BackupVault instance (2048 characters or less).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#description BackupDrBackupVault#description}

---

##### `effectiveTime`<sup>Optional</sup> <a name="effectiveTime" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.effectiveTime"></a>

```typescript
public readonly effectiveTime: string;
```

- *Type:* string

Optional. Time after which the BackupVault resource is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#effective_time BackupDrBackupVault#effective_time}

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

* deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#force_delete BackupDrBackupVault#force_delete}

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, allow update to extend the minimum enforced retention for backup vault.

This overrides
 the restriction against conflicting retention periods. This conflict may occur when the
 expiration schedule defined by the associated backup plan is shorter than the minimum
 retention set by the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#force_update BackupDrBackupVault#force_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#id BackupDrBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreBackupPlanReferences`<sup>Optional</sup> <a name="ignoreBackupPlanReferences" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreBackupPlanReferences"></a>

```typescript
public readonly ignoreBackupPlanReferences: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance that is being referenced by an active backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#ignore_backup_plan_references BackupDrBackupVault#ignore_backup_plan_references}

---

##### `ignoreInactiveDatasources`<sup>Optional</sup> <a name="ignoreInactiveDatasources" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.ignoreInactiveDatasources"></a>

```typescript
public readonly ignoreInactiveDatasources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, the following restrictions against deletion of the backup vault instance can be overridden:    * deletion of a backup vault instance containing no backups, but still containing empty datasources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#ignore_inactive_datasources BackupDrBackupVault#ignore_inactive_datasources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#labels BackupDrBackupVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#project BackupDrBackupVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BackupDrBackupVaultTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#timeouts BackupDrBackupVault#timeouts}

---

### BackupDrBackupVaultTimeouts <a name="BackupDrBackupVaultTimeouts" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.Initializer"></a>

```typescript
import { backupDrBackupVault } from '@cdktf/provider-google'

const backupDrBackupVaultTimeouts: backupDrBackupVault.BackupDrBackupVaultTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#create BackupDrBackupVault#create}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#delete BackupDrBackupVault#delete}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#update BackupDrBackupVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#create BackupDrBackupVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#delete BackupDrBackupVault#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/backup_dr_backup_vault#update BackupDrBackupVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrBackupVaultTimeoutsOutputReference <a name="BackupDrBackupVaultTimeoutsOutputReference" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer"></a>

```typescript
import { backupDrBackupVault } from '@cdktf/provider-google'

new backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupDrBackupVaultTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.backupDrBackupVault.BackupDrBackupVaultTimeouts">BackupDrBackupVaultTimeouts</a>

---



