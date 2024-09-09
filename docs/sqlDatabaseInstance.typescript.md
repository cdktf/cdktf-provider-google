# `sqlDatabaseInstance` Submodule <a name="`sqlDatabaseInstance` Submodule" id="@cdktf/provider-google.sqlDatabaseInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlDatabaseInstance <a name="SqlDatabaseInstance" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance google_sql_database_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstance(scope: Construct, id: string, config: SqlDatabaseInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig">SqlDatabaseInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig">SqlDatabaseInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putClone">putClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putReplicaConfiguration">putReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putRestoreBackupContext">putRestoreBackupContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetClone">resetClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetEncryptionKeyName">resetEncryptionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetMaintenanceVersion">resetMaintenanceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetMasterInstanceName">resetMasterInstanceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetReplicaConfiguration">resetReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRestoreBackupContext">resetRestoreBackupContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRootPassword">resetRootPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClone` <a name="putClone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putClone"></a>

```typescript
public putClone(value: SqlDatabaseInstanceClone): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putClone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

---

##### `putReplicaConfiguration` <a name="putReplicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putReplicaConfiguration"></a>

```typescript
public putReplicaConfiguration(value: SqlDatabaseInstanceReplicaConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putReplicaConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

---

##### `putRestoreBackupContext` <a name="putRestoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putRestoreBackupContext"></a>

```typescript
public putRestoreBackupContext(value: SqlDatabaseInstanceRestoreBackupContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putRestoreBackupContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putSettings"></a>

```typescript
public putSettings(value: SqlDatabaseInstanceSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: SqlDatabaseInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a>

---

##### `resetClone` <a name="resetClone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetClone"></a>

```typescript
public resetClone(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetEncryptionKeyName` <a name="resetEncryptionKeyName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetEncryptionKeyName"></a>

```typescript
public resetEncryptionKeyName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetMaintenanceVersion` <a name="resetMaintenanceVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetMaintenanceVersion"></a>

```typescript
public resetMaintenanceVersion(): void
```

##### `resetMasterInstanceName` <a name="resetMasterInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetMasterInstanceName"></a>

```typescript
public resetMasterInstanceName(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetReplicaConfiguration` <a name="resetReplicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetReplicaConfiguration"></a>

```typescript
public resetReplicaConfiguration(): void
```

##### `resetRestoreBackupContext` <a name="resetRestoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRestoreBackupContext"></a>

```typescript
public resetRestoreBackupContext(): void
```

##### `resetRootPassword` <a name="resetRootPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetRootPassword"></a>

```typescript
public resetRootPassword(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlDatabaseInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isConstruct"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

sqlDatabaseInstance.SqlDatabaseInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformElement"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

sqlDatabaseInstance.SqlDatabaseInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformResource"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

sqlDatabaseInstance.SqlDatabaseInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SqlDatabaseInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlDatabaseInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlDatabaseInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqlDatabaseInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.availableMaintenanceVersions">availableMaintenanceVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.clone">clone</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference">SqlDatabaseInstanceCloneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.firstIpAddress">firstIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList">SqlDatabaseInstanceIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.pscServiceAttachmentLink">pscServiceAttachmentLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.publicIpAddress">publicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaConfiguration">replicaConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference">SqlDatabaseInstanceReplicaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.restoreBackupContext">restoreBackupContext</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference">SqlDatabaseInstanceRestoreBackupContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.serverCaCert">serverCaCert</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList">SqlDatabaseInstanceServerCaCertList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.serviceAccountEmailAddress">serviceAccountEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference">SqlDatabaseInstanceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference">SqlDatabaseInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.cloneInput">cloneInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.databaseVersionInput">databaseVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.encryptionKeyNameInput">encryptionKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.maintenanceVersionInput">maintenanceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.masterInstanceNameInput">masterInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaConfigurationInput">replicaConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.restoreBackupContextInput">restoreBackupContextInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.rootPasswordInput">rootPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.settingsInput">settingsInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.encryptionKeyName">encryptionKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.maintenanceVersion">maintenanceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.masterInstanceName">masterInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.rootPassword">rootPassword</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availableMaintenanceVersions`<sup>Required</sup> <a name="availableMaintenanceVersions" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.availableMaintenanceVersions"></a>

```typescript
public readonly availableMaintenanceVersions: string[];
```

- *Type:* string[]

---

##### `clone`<sup>Required</sup> <a name="clone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.clone"></a>

```typescript
public readonly clone: SqlDatabaseInstanceCloneOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference">SqlDatabaseInstanceCloneOutputReference</a>

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `firstIpAddress`<sup>Required</sup> <a name="firstIpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.firstIpAddress"></a>

```typescript
public readonly firstIpAddress: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.ipAddress"></a>

```typescript
public readonly ipAddress: SqlDatabaseInstanceIpAddressList;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList">SqlDatabaseInstanceIpAddressList</a>

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `pscServiceAttachmentLink`<sup>Required</sup> <a name="pscServiceAttachmentLink" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.pscServiceAttachmentLink"></a>

```typescript
public readonly pscServiceAttachmentLink: string;
```

- *Type:* string

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.publicIpAddress"></a>

```typescript
public readonly publicIpAddress: string;
```

- *Type:* string

---

##### `replicaConfiguration`<sup>Required</sup> <a name="replicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaConfiguration"></a>

```typescript
public readonly replicaConfiguration: SqlDatabaseInstanceReplicaConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference">SqlDatabaseInstanceReplicaConfigurationOutputReference</a>

---

##### `restoreBackupContext`<sup>Required</sup> <a name="restoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.restoreBackupContext"></a>

```typescript
public readonly restoreBackupContext: SqlDatabaseInstanceRestoreBackupContextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference">SqlDatabaseInstanceRestoreBackupContextOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `serverCaCert`<sup>Required</sup> <a name="serverCaCert" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.serverCaCert"></a>

```typescript
public readonly serverCaCert: SqlDatabaseInstanceServerCaCertList;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList">SqlDatabaseInstanceServerCaCertList</a>

---

##### `serviceAccountEmailAddress`<sup>Required</sup> <a name="serviceAccountEmailAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.serviceAccountEmailAddress"></a>

```typescript
public readonly serviceAccountEmailAddress: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.settings"></a>

```typescript
public readonly settings: SqlDatabaseInstanceSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference">SqlDatabaseInstanceSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.timeouts"></a>

```typescript
public readonly timeouts: SqlDatabaseInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference">SqlDatabaseInstanceTimeoutsOutputReference</a>

---

##### `cloneInput`<sup>Optional</sup> <a name="cloneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.cloneInput"></a>

```typescript
public readonly cloneInput: SqlDatabaseInstanceClone;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

---

##### `databaseVersionInput`<sup>Optional</sup> <a name="databaseVersionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.databaseVersionInput"></a>

```typescript
public readonly databaseVersionInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionKeyNameInput`<sup>Optional</sup> <a name="encryptionKeyNameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.encryptionKeyNameInput"></a>

```typescript
public readonly encryptionKeyNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `maintenanceVersionInput`<sup>Optional</sup> <a name="maintenanceVersionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.maintenanceVersionInput"></a>

```typescript
public readonly maintenanceVersionInput: string;
```

- *Type:* string

---

##### `masterInstanceNameInput`<sup>Optional</sup> <a name="masterInstanceNameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.masterInstanceNameInput"></a>

```typescript
public readonly masterInstanceNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `replicaConfigurationInput`<sup>Optional</sup> <a name="replicaConfigurationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.replicaConfigurationInput"></a>

```typescript
public readonly replicaConfigurationInput: SqlDatabaseInstanceReplicaConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

---

##### `restoreBackupContextInput`<sup>Optional</sup> <a name="restoreBackupContextInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.restoreBackupContextInput"></a>

```typescript
public readonly restoreBackupContextInput: SqlDatabaseInstanceRestoreBackupContext;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

---

##### `rootPasswordInput`<sup>Optional</sup> <a name="rootPasswordInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.rootPasswordInput"></a>

```typescript
public readonly rootPasswordInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.settingsInput"></a>

```typescript
public readonly settingsInput: SqlDatabaseInstanceSettings;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SqlDatabaseInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a>

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionKeyName`<sup>Required</sup> <a name="encryptionKeyName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.encryptionKeyName"></a>

```typescript
public readonly encryptionKeyName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `maintenanceVersion`<sup>Required</sup> <a name="maintenanceVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.maintenanceVersion"></a>

```typescript
public readonly maintenanceVersion: string;
```

- *Type:* string

---

##### `masterInstanceName`<sup>Required</sup> <a name="masterInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.masterInstanceName"></a>

```typescript
public readonly masterInstanceName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `rootPassword`<sup>Required</sup> <a name="rootPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.rootPassword"></a>

```typescript
public readonly rootPassword: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlDatabaseInstanceClone <a name="SqlDatabaseInstanceClone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceClone: sqlDatabaseInstance.SqlDatabaseInstanceClone = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.sourceInstanceName">sourceInstanceName</a></code> | <code>string</code> | The name of the instance from which the point in time should be restored. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.allocatedIpRange">allocatedIpRange</a></code> | <code>string</code> | The name of the allocated ip range for the private ip CloudSQL instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.databaseNames">databaseNames</a></code> | <code>string[]</code> | (SQL Server only, use with point_in_time) clone only the specified databases from the source instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.pointInTime">pointInTime</a></code> | <code>string</code> | The timestamp of the point in time that should be restored. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.preferredZone">preferredZone</a></code> | <code>string</code> | (Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone. |

---

##### `sourceInstanceName`<sup>Required</sup> <a name="sourceInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.sourceInstanceName"></a>

```typescript
public readonly sourceInstanceName: string;
```

- *Type:* string

The name of the instance from which the point in time should be restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#source_instance_name SqlDatabaseInstance#source_instance_name}

---

##### `allocatedIpRange`<sup>Optional</sup> <a name="allocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.allocatedIpRange"></a>

```typescript
public readonly allocatedIpRange: string;
```

- *Type:* string

The name of the allocated ip range for the private ip CloudSQL instance.

For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#allocated_ip_range SqlDatabaseInstance#allocated_ip_range}

---

##### `databaseNames`<sup>Optional</sup> <a name="databaseNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.databaseNames"></a>

```typescript
public readonly databaseNames: string[];
```

- *Type:* string[]

(SQL Server only, use with point_in_time) clone only the specified databases from the source instance.

Clone all databases if empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#database_names SqlDatabaseInstance#database_names}

---

##### `pointInTime`<sup>Optional</sup> <a name="pointInTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.pointInTime"></a>

```typescript
public readonly pointInTime: string;
```

- *Type:* string

The timestamp of the point in time that should be restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#point_in_time SqlDatabaseInstance#point_in_time}

---

##### `preferredZone`<sup>Optional</sup> <a name="preferredZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone.property.preferredZone"></a>

```typescript
public readonly preferredZone: string;
```

- *Type:* string

(Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone.

If no zone is specified, clone to the same zone as the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#preferred_zone SqlDatabaseInstance#preferred_zone}

---

### SqlDatabaseInstanceConfig <a name="SqlDatabaseInstanceConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceConfig: sqlDatabaseInstance.SqlDatabaseInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | The MySQL, PostgreSQL or SQL Server (beta) version to use. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.clone">clone</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a></code> | clone block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Used to block Terraform from deleting a SQL Instance. Defaults to true. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.encryptionKeyName">encryptionKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#encryption_key_name SqlDatabaseInstance#encryption_key_name}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#id SqlDatabaseInstance#id}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.instanceType">instanceType</a></code> | <code>string</code> | The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.maintenanceVersion">maintenanceVersion</a></code> | <code>string</code> | Maintenance version. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.masterInstanceName">masterInstanceName</a></code> | <code>string</code> | The name of the instance that will act as the master in the replication setup. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.name">name</a></code> | <code>string</code> | The name of the instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.region">region</a></code> | <code>string</code> | The region the instance will sit in. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.replicaConfiguration">replicaConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a></code> | replica_configuration block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.restoreBackupContext">restoreBackupContext</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a></code> | restore_backup_context block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.rootPassword">rootPassword</a></code> | <code>string</code> | Initial root password. Required for MS SQL Server. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

The MySQL, PostgreSQL or SQL Server (beta) version to use.

Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0, POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, POSTGRES_15, SQLSERVER_2017_STANDARD, SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB. Database Version Policies includes an up-to-date reference of supported versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#database_version SqlDatabaseInstance#database_version}

---

##### `clone`<sup>Optional</sup> <a name="clone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.clone"></a>

```typescript
public readonly clone: SqlDatabaseInstanceClone;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#clone SqlDatabaseInstance#clone}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Used to block Terraform from deleting a SQL Instance. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#deletion_protection SqlDatabaseInstance#deletion_protection}

---

##### `encryptionKeyName`<sup>Optional</sup> <a name="encryptionKeyName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.encryptionKeyName"></a>

```typescript
public readonly encryptionKeyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#encryption_key_name SqlDatabaseInstance#encryption_key_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#id SqlDatabaseInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE', 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#instance_type SqlDatabaseInstance#instance_type}

---

##### `maintenanceVersion`<sup>Optional</sup> <a name="maintenanceVersion" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.maintenanceVersion"></a>

```typescript
public readonly maintenanceVersion: string;
```

- *Type:* string

Maintenance version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#maintenance_version SqlDatabaseInstance#maintenance_version}

---

##### `masterInstanceName`<sup>Optional</sup> <a name="masterInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.masterInstanceName"></a>

```typescript
public readonly masterInstanceName: string;
```

- *Type:* string

The name of the instance that will act as the master in the replication setup.

Note, this requires the master to have binary_log_enabled set, as well as existing backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#master_instance_name SqlDatabaseInstance#master_instance_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the instance.

If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#name SqlDatabaseInstance#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#project SqlDatabaseInstance#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region the instance will sit in.

Note, Cloud SQL is not available in all regions. A valid region must be provided to use this resource. If a region is not provided in the resource definition, the provider region will be used instead, but this will be an apply-time error for instances if the provider region is not supported with Cloud SQL. If you choose not to provide the region argument for this resource, make sure you understand this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#region SqlDatabaseInstance#region}

---

##### `replicaConfiguration`<sup>Optional</sup> <a name="replicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.replicaConfiguration"></a>

```typescript
public readonly replicaConfiguration: SqlDatabaseInstanceReplicaConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

replica_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#replica_configuration SqlDatabaseInstance#replica_configuration}

---

##### `restoreBackupContext`<sup>Optional</sup> <a name="restoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.restoreBackupContext"></a>

```typescript
public readonly restoreBackupContext: SqlDatabaseInstanceRestoreBackupContext;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

restore_backup_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#restore_backup_context SqlDatabaseInstance#restore_backup_context}

---

##### `rootPassword`<sup>Optional</sup> <a name="rootPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.rootPassword"></a>

```typescript
public readonly rootPassword: string;
```

- *Type:* string

Initial root password. Required for MS SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#root_password SqlDatabaseInstance#root_password}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.settings"></a>

```typescript
public readonly settings: SqlDatabaseInstanceSettings;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#settings SqlDatabaseInstance#settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SqlDatabaseInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#timeouts SqlDatabaseInstance#timeouts}

---

### SqlDatabaseInstanceIpAddress <a name="SqlDatabaseInstanceIpAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddress.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceIpAddress: sqlDatabaseInstance.SqlDatabaseInstanceIpAddress = { ... }
```


### SqlDatabaseInstanceReplicaConfiguration <a name="SqlDatabaseInstanceReplicaConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceReplicaConfiguration: sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.caCertificate">caCertificate</a></code> | <code>string</code> | PEM representation of the trusted CA's x509 certificate. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | PEM representation of the replica's x509 certificate. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.clientKey">clientKey</a></code> | <code>string</code> | PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.connectRetryInterval">connectRetryInterval</a></code> | <code>number</code> | The number of seconds between connect retries. MySQL's default is 60 seconds. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.dumpFilePath">dumpFilePath</a></code> | <code>string</code> | Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.failoverTarget">failoverTarget</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the replica is the failover target. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.masterHeartbeatPeriod">masterHeartbeatPeriod</a></code> | <code>number</code> | Time in ms between replication heartbeats. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.password">password</a></code> | <code>string</code> | Password for the replication connection. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.sslCipher">sslCipher</a></code> | <code>string</code> | Permissible ciphers for use in SSL encryption. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.username">username</a></code> | <code>string</code> | Username for replication connection. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.verifyServerCertificate">verifyServerCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if the master's common name value is checked during the SSL handshake. |

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

PEM representation of the trusted CA's x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#ca_certificate SqlDatabaseInstance#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

PEM representation of the replica's x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#client_certificate SqlDatabaseInstance#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#client_key SqlDatabaseInstance#client_key}

---

##### `connectRetryInterval`<sup>Optional</sup> <a name="connectRetryInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.connectRetryInterval"></a>

```typescript
public readonly connectRetryInterval: number;
```

- *Type:* number

The number of seconds between connect retries. MySQL's default is 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#connect_retry_interval SqlDatabaseInstance#connect_retry_interval}

---

##### `dumpFilePath`<sup>Optional</sup> <a name="dumpFilePath" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.dumpFilePath"></a>

```typescript
public readonly dumpFilePath: string;
```

- *Type:* string

Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#dump_file_path SqlDatabaseInstance#dump_file_path}

---

##### `failoverTarget`<sup>Optional</sup> <a name="failoverTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.failoverTarget"></a>

```typescript
public readonly failoverTarget: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the replica is the failover target.

If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance. Not supported for Postgres

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#failover_target SqlDatabaseInstance#failover_target}

---

##### `masterHeartbeatPeriod`<sup>Optional</sup> <a name="masterHeartbeatPeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.masterHeartbeatPeriod"></a>

```typescript
public readonly masterHeartbeatPeriod: number;
```

- *Type:* number

Time in ms between replication heartbeats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#master_heartbeat_period SqlDatabaseInstance#master_heartbeat_period}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the replication connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#password SqlDatabaseInstance#password}

---

##### `sslCipher`<sup>Optional</sup> <a name="sslCipher" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.sslCipher"></a>

```typescript
public readonly sslCipher: string;
```

- *Type:* string

Permissible ciphers for use in SSL encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#ssl_cipher SqlDatabaseInstance#ssl_cipher}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for replication connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#username SqlDatabaseInstance#username}

---

##### `verifyServerCertificate`<sup>Optional</sup> <a name="verifyServerCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration.property.verifyServerCertificate"></a>

```typescript
public readonly verifyServerCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if the master's common name value is checked during the SSL handshake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#verify_server_certificate SqlDatabaseInstance#verify_server_certificate}

---

### SqlDatabaseInstanceRestoreBackupContext <a name="SqlDatabaseInstanceRestoreBackupContext" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceRestoreBackupContext: sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.backupRunId">backupRunId</a></code> | <code>number</code> | The ID of the backup run to restore from. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.instanceId">instanceId</a></code> | <code>string</code> | The ID of the instance that the backup was taken from. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.project">project</a></code> | <code>string</code> | The full project ID of the source instance. |

---

##### `backupRunId`<sup>Required</sup> <a name="backupRunId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.backupRunId"></a>

```typescript
public readonly backupRunId: number;
```

- *Type:* number

The ID of the backup run to restore from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#backup_run_id SqlDatabaseInstance#backup_run_id}

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The ID of the instance that the backup was taken from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#instance_id SqlDatabaseInstance#instance_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The full project ID of the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#project SqlDatabaseInstance#project}

---

### SqlDatabaseInstanceServerCaCert <a name="SqlDatabaseInstanceServerCaCert" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceServerCaCert: sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert = { ... }
```


### SqlDatabaseInstanceSettings <a name="SqlDatabaseInstanceSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceSettings: sqlDatabaseInstance.SqlDatabaseInstanceSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.tier">tier</a></code> | <code>string</code> | The machine type to use. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.activationPolicy">activationPolicy</a></code> | <code>string</code> | This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.activeDirectoryConfig">activeDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | active_directory_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.availabilityType">availabilityType</a></code> | <code>string</code> | The availability type of the Cloud SQL instance, high availability (REGIONAL) or single zone (ZONAL). |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.backupConfiguration">backupConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a></code> | backup_configuration block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.collation">collation</a></code> | <code>string</code> | The name of server instance collation. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.connectorEnforcement">connectorEnforcement</a></code> | <code>string</code> | Enables the enforcement of Cloud SQL Auth Proxy or Cloud SQL connectors for all the connections. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.databaseFlags">databaseFlags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a>[]</code> | database_flags block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.dataCacheConfig">dataCacheConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a></code> | data_cache_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Configuration to protect against accidental instance deletion. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.denyMaintenancePeriod">denyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskAutoresize">diskAutoresize</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables auto-resizing of the storage size. Defaults to true. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskAutoresizeLimit">diskAutoresizeLimit</a></code> | <code>number</code> | The maximum size, in GB, to which storage capacity can be automatically increased. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskSize">diskSize</a></code> | <code>number</code> | The size of data disk, in GB. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskType">diskType</a></code> | <code>string</code> | The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.edition">edition</a></code> | <code>string</code> | The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.enableDataplexIntegration">enableDataplexIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables Dataplex Integration. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.enableGoogleMlIntegration">enableGoogleMlIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables Vertex AI Integration. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.insightsConfig">insightsConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a></code> | insights_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a></code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.locationPreference">locationPreference</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a></code> | location_preference block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.passwordValidationPolicy">passwordValidationPolicy</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | password_validation_policy block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.pricingPlan">pricingPlan</a></code> | <code>string</code> | Pricing plan for this instance, can only be PER_USE. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.sqlServerAuditConfig">sqlServerAuditConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | sql_server_audit_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.timeZone">timeZone</a></code> | <code>string</code> | The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.userLabels">userLabels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value user label pairs to assign to the instance. |

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

The machine type to use.

See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#tier SqlDatabaseInstance#tier}

---

##### `activationPolicy`<sup>Optional</sup> <a name="activationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.activationPolicy"></a>

```typescript
public readonly activationPolicy: string;
```

- *Type:* string

This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#activation_policy SqlDatabaseInstance#activation_policy}

---

##### `activeDirectoryConfig`<sup>Optional</sup> <a name="activeDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.activeDirectoryConfig"></a>

```typescript
public readonly activeDirectoryConfig: SqlDatabaseInstanceSettingsActiveDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

active_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#active_directory_config SqlDatabaseInstance#active_directory_config}

---

##### `advancedMachineFeatures`<sup>Optional</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.advancedMachineFeatures"></a>

```typescript
public readonly advancedMachineFeatures: SqlDatabaseInstanceSettingsAdvancedMachineFeatures;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#advanced_machine_features SqlDatabaseInstance#advanced_machine_features}

---

##### `availabilityType`<sup>Optional</sup> <a name="availabilityType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.availabilityType"></a>

```typescript
public readonly availabilityType: string;
```

- *Type:* string

The availability type of the Cloud SQL instance, high availability (REGIONAL) or single zone (ZONAL).

For all instances, ensure that
settings.backup_configuration.enabled is set to true.
For MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.
For Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled
is set to true. Defaults to ZONAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#availability_type SqlDatabaseInstance#availability_type}

---

##### `backupConfiguration`<sup>Optional</sup> <a name="backupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.backupConfiguration"></a>

```typescript
public readonly backupConfiguration: SqlDatabaseInstanceSettingsBackupConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a>

backup_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#backup_configuration SqlDatabaseInstance#backup_configuration}

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string

The name of server instance collation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#collation SqlDatabaseInstance#collation}

---

##### `connectorEnforcement`<sup>Optional</sup> <a name="connectorEnforcement" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.connectorEnforcement"></a>

```typescript
public readonly connectorEnforcement: string;
```

- *Type:* string

Enables the enforcement of Cloud SQL Auth Proxy or Cloud SQL connectors for all the connections.

If enabled, all the direct connections are rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#connector_enforcement SqlDatabaseInstance#connector_enforcement}

---

##### `databaseFlags`<sup>Optional</sup> <a name="databaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.databaseFlags"></a>

```typescript
public readonly databaseFlags: IResolvable | SqlDatabaseInstanceSettingsDatabaseFlags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a>[]

database_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#database_flags SqlDatabaseInstance#database_flags}

---

##### `dataCacheConfig`<sup>Optional</sup> <a name="dataCacheConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.dataCacheConfig"></a>

```typescript
public readonly dataCacheConfig: SqlDatabaseInstanceSettingsDataCacheConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a>

data_cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#data_cache_config SqlDatabaseInstance#data_cache_config}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Configuration to protect against accidental instance deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#deletion_protection_enabled SqlDatabaseInstance#deletion_protection_enabled}

---

##### `denyMaintenancePeriod`<sup>Optional</sup> <a name="denyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.denyMaintenancePeriod"></a>

```typescript
public readonly denyMaintenancePeriod: SqlDatabaseInstanceSettingsDenyMaintenancePeriod;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#deny_maintenance_period SqlDatabaseInstance#deny_maintenance_period}

---

##### `diskAutoresize`<sup>Optional</sup> <a name="diskAutoresize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskAutoresize"></a>

```typescript
public readonly diskAutoresize: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables auto-resizing of the storage size. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#disk_autoresize SqlDatabaseInstance#disk_autoresize}

---

##### `diskAutoresizeLimit`<sup>Optional</sup> <a name="diskAutoresizeLimit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskAutoresizeLimit"></a>

```typescript
public readonly diskAutoresizeLimit: number;
```

- *Type:* number

The maximum size, in GB, to which storage capacity can be automatically increased.

The default value is 0, which specifies that there is no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#disk_autoresize_limit SqlDatabaseInstance#disk_autoresize_limit}

---

##### `diskSize`<sup>Optional</sup> <a name="diskSize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* number

The size of data disk, in GB.

Size of a running instance cannot be reduced but can be increased. The minimum value is 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#disk_size SqlDatabaseInstance#disk_size}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

The type of data disk: PD_SSD or PD_HDD. Defaults to PD_SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#disk_type SqlDatabaseInstance#disk_type}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

The edition of the instance, can be ENTERPRISE or ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#edition SqlDatabaseInstance#edition}

---

##### `enableDataplexIntegration`<sup>Optional</sup> <a name="enableDataplexIntegration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.enableDataplexIntegration"></a>

```typescript
public readonly enableDataplexIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables Dataplex Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#enable_dataplex_integration SqlDatabaseInstance#enable_dataplex_integration}

---

##### `enableGoogleMlIntegration`<sup>Optional</sup> <a name="enableGoogleMlIntegration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.enableGoogleMlIntegration"></a>

```typescript
public readonly enableGoogleMlIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables Vertex AI Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#enable_google_ml_integration SqlDatabaseInstance#enable_google_ml_integration}

---

##### `insightsConfig`<sup>Optional</sup> <a name="insightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.insightsConfig"></a>

```typescript
public readonly insightsConfig: SqlDatabaseInstanceSettingsInsightsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a>

insights_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#insights_config SqlDatabaseInstance#insights_config}

---

##### `ipConfiguration`<sup>Optional</sup> <a name="ipConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: SqlDatabaseInstanceSettingsIpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a>

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#ip_configuration SqlDatabaseInstance#ip_configuration}

---

##### `locationPreference`<sup>Optional</sup> <a name="locationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.locationPreference"></a>

```typescript
public readonly locationPreference: SqlDatabaseInstanceSettingsLocationPreference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a>

location_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#location_preference SqlDatabaseInstance#location_preference}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: SqlDatabaseInstanceSettingsMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#maintenance_window SqlDatabaseInstance#maintenance_window}

---

##### `passwordValidationPolicy`<sup>Optional</sup> <a name="passwordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.passwordValidationPolicy"></a>

```typescript
public readonly passwordValidationPolicy: SqlDatabaseInstanceSettingsPasswordValidationPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

password_validation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#password_validation_policy SqlDatabaseInstance#password_validation_policy}

---

##### `pricingPlan`<sup>Optional</sup> <a name="pricingPlan" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.pricingPlan"></a>

```typescript
public readonly pricingPlan: string;
```

- *Type:* string

Pricing plan for this instance, can only be PER_USE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#pricing_plan SqlDatabaseInstance#pricing_plan}

---

##### `sqlServerAuditConfig`<sup>Optional</sup> <a name="sqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.sqlServerAuditConfig"></a>

```typescript
public readonly sqlServerAuditConfig: SqlDatabaseInstanceSettingsSqlServerAuditConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

sql_server_audit_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#sql_server_audit_config SqlDatabaseInstance#sql_server_audit_config}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The time_zone to be used by the database engine (supported only for SQL Server), in SQL Server timezone format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#time_zone SqlDatabaseInstance#time_zone}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings.property.userLabels"></a>

```typescript
public readonly userLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value user label pairs to assign to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#user_labels SqlDatabaseInstance#user_labels}

---

### SqlDatabaseInstanceSettingsActiveDirectoryConfig <a name="SqlDatabaseInstanceSettingsActiveDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceSettingsActiveDirectoryConfig: sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig.property.domain">domain</a></code> | <code>string</code> | Domain name of the Active Directory for SQL Server (e.g., mydomain.com). |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Domain name of the Active Directory for SQL Server (e.g., mydomain.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#domain SqlDatabaseInstance#domain}

---

### SqlDatabaseInstanceSettingsAdvancedMachineFeatures <a name="SqlDatabaseInstanceSettingsAdvancedMachineFeatures" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceSettingsAdvancedMachineFeatures: sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | The number of threads per physical core. Can be 1 or 2. |

---

##### `threadsPerCore`<sup>Optional</sup> <a name="threadsPerCore" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

The number of threads per physical core. Can be 1 or 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#threads_per_core SqlDatabaseInstance#threads_per_core}

---

### SqlDatabaseInstanceSettingsBackupConfiguration <a name="SqlDatabaseInstanceSettingsBackupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceSettingsBackupConfiguration: sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.backupRetentionSettings">backupRetentionSettings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | backup_retention_settings block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.binaryLogEnabled">binaryLogEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if binary logging is enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if backup configuration is enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.location">location</a></code> | <code>string</code> | Location of the backup configuration. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.pointInTimeRecoveryEnabled">pointInTimeRecoveryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if Point-in-time recovery is enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.startTime">startTime</a></code> | <code>string</code> | HH:MM format time indicating when backup configuration starts. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.transactionLogRetentionDays">transactionLogRetentionDays</a></code> | <code>number</code> | The number of days of transaction logs we retain for point in time restore, from 1-7. |

---

##### `backupRetentionSettings`<sup>Optional</sup> <a name="backupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.backupRetentionSettings"></a>

```typescript
public readonly backupRetentionSettings: SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

backup_retention_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#backup_retention_settings SqlDatabaseInstance#backup_retention_settings}

---

##### `binaryLogEnabled`<sup>Optional</sup> <a name="binaryLogEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.binaryLogEnabled"></a>

```typescript
public readonly binaryLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if binary logging is enabled.

If settings.backup_configuration.enabled is false, this must be as well. Can only be used with MySQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#binary_log_enabled SqlDatabaseInstance#binary_log_enabled}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if backup configuration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#enabled SqlDatabaseInstance#enabled}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the backup configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#location SqlDatabaseInstance#location}

---

##### `pointInTimeRecoveryEnabled`<sup>Optional</sup> <a name="pointInTimeRecoveryEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.pointInTimeRecoveryEnabled"></a>

```typescript
public readonly pointInTimeRecoveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if Point-in-time recovery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#point_in_time_recovery_enabled SqlDatabaseInstance#point_in_time_recovery_enabled}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

HH:MM format time indicating when backup configuration starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#start_time SqlDatabaseInstance#start_time}

---

##### `transactionLogRetentionDays`<sup>Optional</sup> <a name="transactionLogRetentionDays" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration.property.transactionLogRetentionDays"></a>

```typescript
public readonly transactionLogRetentionDays: number;
```

- *Type:* number

The number of days of transaction logs we retain for point in time restore, from 1-7.

(For PostgreSQL Enterprise Plus instances, from 1 to 35.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#transaction_log_retention_days SqlDatabaseInstance#transaction_log_retention_days}

---

### SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings <a name="SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings: sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retainedBackups">retainedBackups</a></code> | <code>number</code> | Number of backups to retain. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | The unit that 'retainedBackups' represents. Defaults to COUNT. |

---

##### `retainedBackups`<sup>Required</sup> <a name="retainedBackups" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retainedBackups"></a>

```typescript
public readonly retainedBackups: number;
```

- *Type:* number

Number of backups to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#retained_backups SqlDatabaseInstance#retained_backups}

---

##### `retentionUnit`<sup>Optional</sup> <a name="retentionUnit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

The unit that 'retainedBackups' represents. Defaults to COUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#retention_unit SqlDatabaseInstance#retention_unit}

---

### SqlDatabaseInstanceSettingsDatabaseFlags <a name="SqlDatabaseInstanceSettingsDatabaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceSettingsDatabaseFlags: sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.property.name">name</a></code> | <code>string</code> | Name of the flag. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.property.value">value</a></code> | <code>string</code> | Value of the flag. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#name SqlDatabaseInstance#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#value SqlDatabaseInstance#value}

---

### SqlDatabaseInstanceSettingsDataCacheConfig <a name="SqlDatabaseInstanceSettingsDataCacheConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceSettingsDataCacheConfig: sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig.property.dataCacheEnabled">dataCacheEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether data cache is enabled for the instance. |

---

##### `dataCacheEnabled`<sup>Optional</sup> <a name="dataCacheEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig.property.dataCacheEnabled"></a>

```typescript
public readonly dataCacheEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether data cache is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#data_cache_enabled SqlDatabaseInstance#data_cache_enabled}

---

### SqlDatabaseInstanceSettingsDenyMaintenancePeriod <a name="SqlDatabaseInstanceSettingsDenyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceSettingsDenyMaintenancePeriod: sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.endDate">endDate</a></code> | <code>string</code> | End date before which maintenance will not take place. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.startDate">startDate</a></code> | <code>string</code> | Start date after which maintenance will not take place. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.time">time</a></code> | <code>string</code> | Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. |

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

End date before which maintenance will not take place.

The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#end_date SqlDatabaseInstance#end_date}

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

Start date after which maintenance will not take place.

The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#start_date SqlDatabaseInstance#start_date}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date.

The time is in format: HH:mm:SS, i.e., 00:00:00

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#time SqlDatabaseInstance#time}

---

### SqlDatabaseInstanceSettingsInsightsConfig <a name="SqlDatabaseInstanceSettingsInsightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceSettingsInsightsConfig: sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryInsightsEnabled">queryInsightsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if Query Insights feature is enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryPlansPerMinute">queryPlansPerMinute</a></code> | <code>number</code> | Number of query execution plans captured by Insights per minute for all queries combined. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryStringLength">queryStringLength</a></code> | <code>number</code> | Maximum query length stored in bytes. Between 256 and 4500. Default to 1024. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.recordApplicationTags">recordApplicationTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if Query Insights will record application tags from query when enabled. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.recordClientAddress">recordClientAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | True if Query Insights will record client address when enabled. |

---

##### `queryInsightsEnabled`<sup>Optional</sup> <a name="queryInsightsEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryInsightsEnabled"></a>

```typescript
public readonly queryInsightsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if Query Insights feature is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#query_insights_enabled SqlDatabaseInstance#query_insights_enabled}

---

##### `queryPlansPerMinute`<sup>Optional</sup> <a name="queryPlansPerMinute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryPlansPerMinute"></a>

```typescript
public readonly queryPlansPerMinute: number;
```

- *Type:* number

Number of query execution plans captured by Insights per minute for all queries combined.

Between 0 and 20. Default to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#query_plans_per_minute SqlDatabaseInstance#query_plans_per_minute}

---

##### `queryStringLength`<sup>Optional</sup> <a name="queryStringLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.queryStringLength"></a>

```typescript
public readonly queryStringLength: number;
```

- *Type:* number

Maximum query length stored in bytes. Between 256 and 4500. Default to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#query_string_length SqlDatabaseInstance#query_string_length}

---

##### `recordApplicationTags`<sup>Optional</sup> <a name="recordApplicationTags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.recordApplicationTags"></a>

```typescript
public readonly recordApplicationTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if Query Insights will record application tags from query when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#record_application_tags SqlDatabaseInstance#record_application_tags}

---

##### `recordClientAddress`<sup>Optional</sup> <a name="recordClientAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig.property.recordClientAddress"></a>

```typescript
public readonly recordClientAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

True if Query Insights will record client address when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#record_client_address SqlDatabaseInstance#record_client_address}

---

### SqlDatabaseInstanceSettingsIpConfiguration <a name="SqlDatabaseInstanceSettingsIpConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceSettingsIpConfiguration: sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.allocatedIpRange">allocatedIpRange</a></code> | <code>string</code> | The name of the allocated ip range for the private ip CloudSQL instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.authorizedNetworks">authorizedNetworks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>[]</code> | authorized_networks block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.enablePrivatePathForGoogleCloudServices">enablePrivatePathForGoogleCloudServices</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.ipv4Enabled">ipv4Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this Cloud SQL instance should be assigned a public IPV4 address. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.privateNetwork">privateNetwork</a></code> | <code>string</code> | The VPC network from which the Cloud SQL instance is accessible for private IP. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.pscConfig">pscConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>[]</code> | psc_config block. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.serverCaMode">serverCaMode</a></code> | <code>string</code> | Specify how the server certificate's Certificate Authority is hosted. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.sslMode">sslMode</a></code> | <code>string</code> | Specify how SSL connection should be enforced in DB connections. |

---

##### `allocatedIpRange`<sup>Optional</sup> <a name="allocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.allocatedIpRange"></a>

```typescript
public readonly allocatedIpRange: string;
```

- *Type:* string

The name of the allocated ip range for the private ip CloudSQL instance.

For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#allocated_ip_range SqlDatabaseInstance#allocated_ip_range}

---

##### `authorizedNetworks`<sup>Optional</sup> <a name="authorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.authorizedNetworks"></a>

```typescript
public readonly authorizedNetworks: IResolvable | SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>[]

authorized_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#authorized_networks SqlDatabaseInstance#authorized_networks}

---

##### `enablePrivatePathForGoogleCloudServices`<sup>Optional</sup> <a name="enablePrivatePathForGoogleCloudServices" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.enablePrivatePathForGoogleCloudServices"></a>

```typescript
public readonly enablePrivatePathForGoogleCloudServices: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Google Cloud services such as BigQuery are allowed to access data in this Cloud SQL instance over a private IP connection.

SQLSERVER database type is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#enable_private_path_for_google_cloud_services SqlDatabaseInstance#enable_private_path_for_google_cloud_services}

---

##### `ipv4Enabled`<sup>Optional</sup> <a name="ipv4Enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.ipv4Enabled"></a>

```typescript
public readonly ipv4Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this Cloud SQL instance should be assigned a public IPV4 address.

At least ipv4_enabled must be enabled or a private_network must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#ipv4_enabled SqlDatabaseInstance#ipv4_enabled}

---

##### `privateNetwork`<sup>Optional</sup> <a name="privateNetwork" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.privateNetwork"></a>

```typescript
public readonly privateNetwork: string;
```

- *Type:* string

The VPC network from which the Cloud SQL instance is accessible for private IP.

For example, projects/myProject/global/networks/default. Specifying a network enables private IP. At least ipv4_enabled must be enabled or a private_network must be configured. This setting can be updated, but it cannot be removed after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#private_network SqlDatabaseInstance#private_network}

---

##### `pscConfig`<sup>Optional</sup> <a name="pscConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.pscConfig"></a>

```typescript
public readonly pscConfig: IResolvable | SqlDatabaseInstanceSettingsIpConfigurationPscConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>[]

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#psc_config SqlDatabaseInstance#psc_config}

---

##### `serverCaMode`<sup>Optional</sup> <a name="serverCaMode" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.serverCaMode"></a>

```typescript
public readonly serverCaMode: string;
```

- *Type:* string

Specify how the server certificate's Certificate Authority is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#server_ca_mode SqlDatabaseInstance#server_ca_mode}

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

Specify how SSL connection should be enforced in DB connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#ssl_mode SqlDatabaseInstance#ssl_mode}

---

### SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks <a name="SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks: sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#value SqlDatabaseInstance#value}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.expirationTime">expirationTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#expiration_time SqlDatabaseInstance#expiration_time}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#name SqlDatabaseInstance#name}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#value SqlDatabaseInstance#value}.

---

##### `expirationTime`<sup>Optional</sup> <a name="expirationTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#expiration_time SqlDatabaseInstance#expiration_time}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#name SqlDatabaseInstance#name}.

---

### SqlDatabaseInstanceSettingsIpConfigurationPscConfig <a name="SqlDatabaseInstanceSettingsIpConfigurationPscConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceSettingsIpConfigurationPscConfig: sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.allowedConsumerProjects">allowedConsumerProjects</a></code> | <code>string[]</code> | List of consumer projects that are allow-listed for PSC connections to this instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.pscEnabled">pscEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether PSC connectivity is enabled for this instance. |

---

##### `allowedConsumerProjects`<sup>Optional</sup> <a name="allowedConsumerProjects" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.allowedConsumerProjects"></a>

```typescript
public readonly allowedConsumerProjects: string[];
```

- *Type:* string[]

List of consumer projects that are allow-listed for PSC connections to this instance.

This instance can be connected to with PSC from any network in these projects. Each consumer project in this list may be represented by a project number (numeric) or by a project id (alphanumeric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#allowed_consumer_projects SqlDatabaseInstance#allowed_consumer_projects}

---

##### `pscEnabled`<sup>Optional</sup> <a name="pscEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig.property.pscEnabled"></a>

```typescript
public readonly pscEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether PSC connectivity is enabled for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#psc_enabled SqlDatabaseInstance#psc_enabled}

---

### SqlDatabaseInstanceSettingsLocationPreference <a name="SqlDatabaseInstanceSettingsLocationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceSettingsLocationPreference: sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.followGaeApplication">followGaeApplication</a></code> | <code>string</code> | A Google App Engine application whose zone to remain in. Must be in the same region as this instance. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.secondaryZone">secondaryZone</a></code> | <code>string</code> | The preferred Compute Engine zone for the secondary/failover. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.zone">zone</a></code> | <code>string</code> | The preferred compute engine zone. |

---

##### `followGaeApplication`<sup>Optional</sup> <a name="followGaeApplication" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.followGaeApplication"></a>

```typescript
public readonly followGaeApplication: string;
```

- *Type:* string

A Google App Engine application whose zone to remain in. Must be in the same region as this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#follow_gae_application SqlDatabaseInstance#follow_gae_application}

---

##### `secondaryZone`<sup>Optional</sup> <a name="secondaryZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.secondaryZone"></a>

```typescript
public readonly secondaryZone: string;
```

- *Type:* string

The preferred Compute Engine zone for the secondary/failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#secondary_zone SqlDatabaseInstance#secondary_zone}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The preferred compute engine zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#zone SqlDatabaseInstance#zone}

---

### SqlDatabaseInstanceSettingsMaintenanceWindow <a name="SqlDatabaseInstanceSettingsMaintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceSettingsMaintenanceWindow: sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.day">day</a></code> | <code>number</code> | Day of week (1-7), starting on Monday. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.hour">hour</a></code> | <code>number</code> | Hour of day (0-23), ignored if day not set. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.updateTrack">updateTrack</a></code> | <code>string</code> | Receive updates after one week (canary) or after two weeks (stable) or after five weeks (week5) of notification. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Day of week (1-7), starting on Monday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#day SqlDatabaseInstance#day}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

Hour of day (0-23), ignored if day not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#hour SqlDatabaseInstance#hour}

---

##### `updateTrack`<sup>Optional</sup> <a name="updateTrack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow.property.updateTrack"></a>

```typescript
public readonly updateTrack: string;
```

- *Type:* string

Receive updates after one week (canary) or after two weeks (stable) or after five weeks (week5) of notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#update_track SqlDatabaseInstance#update_track}

---

### SqlDatabaseInstanceSettingsPasswordValidationPolicy <a name="SqlDatabaseInstanceSettingsPasswordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceSettingsPasswordValidationPolicy: sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.enablePasswordPolicy">enablePasswordPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the password policy is enabled or not. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.complexity">complexity</a></code> | <code>string</code> | Password complexity. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.disallowUsernameSubstring">disallowUsernameSubstring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disallow username as a part of the password. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.minLength">minLength</a></code> | <code>number</code> | Minimum number of characters allowed. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.passwordChangeInterval">passwordChangeInterval</a></code> | <code>string</code> | Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.reuseInterval">reuseInterval</a></code> | <code>number</code> | Number of previous passwords that cannot be reused. |

---

##### `enablePasswordPolicy`<sup>Required</sup> <a name="enablePasswordPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.enablePasswordPolicy"></a>

```typescript
public readonly enablePasswordPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the password policy is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#enable_password_policy SqlDatabaseInstance#enable_password_policy}

---

##### `complexity`<sup>Optional</sup> <a name="complexity" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.complexity"></a>

```typescript
public readonly complexity: string;
```

- *Type:* string

Password complexity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#complexity SqlDatabaseInstance#complexity}

---

##### `disallowUsernameSubstring`<sup>Optional</sup> <a name="disallowUsernameSubstring" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.disallowUsernameSubstring"></a>

```typescript
public readonly disallowUsernameSubstring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disallow username as a part of the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#disallow_username_substring SqlDatabaseInstance#disallow_username_substring}

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

Minimum number of characters allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#min_length SqlDatabaseInstance#min_length}

---

##### `passwordChangeInterval`<sup>Optional</sup> <a name="passwordChangeInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.passwordChangeInterval"></a>

```typescript
public readonly passwordChangeInterval: string;
```

- *Type:* string

Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#password_change_interval SqlDatabaseInstance#password_change_interval}

---

##### `reuseInterval`<sup>Optional</sup> <a name="reuseInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy.property.reuseInterval"></a>

```typescript
public readonly reuseInterval: number;
```

- *Type:* number

Number of previous passwords that cannot be reused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#reuse_interval SqlDatabaseInstance#reuse_interval}

---

### SqlDatabaseInstanceSettingsSqlServerAuditConfig <a name="SqlDatabaseInstanceSettingsSqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceSettingsSqlServerAuditConfig: sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.bucket">bucket</a></code> | <code>string</code> | The name of the destination bucket (e.g., gs://mybucket). |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.retentionInterval">retentionInterval</a></code> | <code>string</code> | How long to keep generated audit files. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.uploadInterval">uploadInterval</a></code> | <code>string</code> | How often to upload generated audit files. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the destination bucket (e.g., gs://mybucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#bucket SqlDatabaseInstance#bucket}

---

##### `retentionInterval`<sup>Optional</sup> <a name="retentionInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.retentionInterval"></a>

```typescript
public readonly retentionInterval: string;
```

- *Type:* string

How long to keep generated audit files.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#retention_interval SqlDatabaseInstance#retention_interval}

---

##### `uploadInterval`<sup>Optional</sup> <a name="uploadInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig.property.uploadInterval"></a>

```typescript
public readonly uploadInterval: string;
```

- *Type:* string

How often to upload generated audit files.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#upload_interval SqlDatabaseInstance#upload_interval}

---

### SqlDatabaseInstanceTimeouts <a name="SqlDatabaseInstanceTimeouts" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

const sqlDatabaseInstanceTimeouts: sqlDatabaseInstance.SqlDatabaseInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#create SqlDatabaseInstance#create}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#delete SqlDatabaseInstance#delete}. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#update SqlDatabaseInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#create SqlDatabaseInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#delete SqlDatabaseInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/resources/sql_database_instance#update SqlDatabaseInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlDatabaseInstanceCloneOutputReference <a name="SqlDatabaseInstanceCloneOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetAllocatedIpRange">resetAllocatedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetDatabaseNames">resetDatabaseNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetPointInTime">resetPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetPreferredZone">resetPreferredZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllocatedIpRange` <a name="resetAllocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetAllocatedIpRange"></a>

```typescript
public resetAllocatedIpRange(): void
```

##### `resetDatabaseNames` <a name="resetDatabaseNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetDatabaseNames"></a>

```typescript
public resetDatabaseNames(): void
```

##### `resetPointInTime` <a name="resetPointInTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetPointInTime"></a>

```typescript
public resetPointInTime(): void
```

##### `resetPreferredZone` <a name="resetPreferredZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.resetPreferredZone"></a>

```typescript
public resetPreferredZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.allocatedIpRangeInput">allocatedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.databaseNamesInput">databaseNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.pointInTimeInput">pointInTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.preferredZoneInput">preferredZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.sourceInstanceNameInput">sourceInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.allocatedIpRange">allocatedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.databaseNames">databaseNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.pointInTime">pointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.preferredZone">preferredZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.sourceInstanceName">sourceInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocatedIpRangeInput`<sup>Optional</sup> <a name="allocatedIpRangeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.allocatedIpRangeInput"></a>

```typescript
public readonly allocatedIpRangeInput: string;
```

- *Type:* string

---

##### `databaseNamesInput`<sup>Optional</sup> <a name="databaseNamesInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.databaseNamesInput"></a>

```typescript
public readonly databaseNamesInput: string[];
```

- *Type:* string[]

---

##### `pointInTimeInput`<sup>Optional</sup> <a name="pointInTimeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.pointInTimeInput"></a>

```typescript
public readonly pointInTimeInput: string;
```

- *Type:* string

---

##### `preferredZoneInput`<sup>Optional</sup> <a name="preferredZoneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.preferredZoneInput"></a>

```typescript
public readonly preferredZoneInput: string;
```

- *Type:* string

---

##### `sourceInstanceNameInput`<sup>Optional</sup> <a name="sourceInstanceNameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.sourceInstanceNameInput"></a>

```typescript
public readonly sourceInstanceNameInput: string;
```

- *Type:* string

---

##### `allocatedIpRange`<sup>Required</sup> <a name="allocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.allocatedIpRange"></a>

```typescript
public readonly allocatedIpRange: string;
```

- *Type:* string

---

##### `databaseNames`<sup>Required</sup> <a name="databaseNames" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.databaseNames"></a>

```typescript
public readonly databaseNames: string[];
```

- *Type:* string[]

---

##### `pointInTime`<sup>Required</sup> <a name="pointInTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.pointInTime"></a>

```typescript
public readonly pointInTime: string;
```

- *Type:* string

---

##### `preferredZone`<sup>Required</sup> <a name="preferredZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.preferredZone"></a>

```typescript
public readonly preferredZone: string;
```

- *Type:* string

---

##### `sourceInstanceName`<sup>Required</sup> <a name="sourceInstanceName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.sourceInstanceName"></a>

```typescript
public readonly sourceInstanceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceCloneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceClone;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceClone">SqlDatabaseInstanceClone</a>

---


### SqlDatabaseInstanceIpAddressList <a name="SqlDatabaseInstanceIpAddressList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.get"></a>

```typescript
public get(index: number): SqlDatabaseInstanceIpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SqlDatabaseInstanceIpAddressOutputReference <a name="SqlDatabaseInstanceIpAddressOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.timeToRetire">timeToRetire</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddress">SqlDatabaseInstanceIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `timeToRetire`<sup>Required</sup> <a name="timeToRetire" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.timeToRetire"></a>

```typescript
public readonly timeToRetire: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceIpAddress;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceIpAddress">SqlDatabaseInstanceIpAddress</a>

---


### SqlDatabaseInstanceReplicaConfigurationOutputReference <a name="SqlDatabaseInstanceReplicaConfigurationOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetCaCertificate">resetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetConnectRetryInterval">resetConnectRetryInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetDumpFilePath">resetDumpFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetFailoverTarget">resetFailoverTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetMasterHeartbeatPeriod">resetMasterHeartbeatPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetSslCipher">resetSslCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetVerifyServerCertificate">resetVerifyServerCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCertificate` <a name="resetCaCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetCaCertificate"></a>

```typescript
public resetCaCertificate(): void
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetClientKey"></a>

```typescript
public resetClientKey(): void
```

##### `resetConnectRetryInterval` <a name="resetConnectRetryInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetConnectRetryInterval"></a>

```typescript
public resetConnectRetryInterval(): void
```

##### `resetDumpFilePath` <a name="resetDumpFilePath" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetDumpFilePath"></a>

```typescript
public resetDumpFilePath(): void
```

##### `resetFailoverTarget` <a name="resetFailoverTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetFailoverTarget"></a>

```typescript
public resetFailoverTarget(): void
```

##### `resetMasterHeartbeatPeriod` <a name="resetMasterHeartbeatPeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetMasterHeartbeatPeriod"></a>

```typescript
public resetMasterHeartbeatPeriod(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetSslCipher` <a name="resetSslCipher" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetSslCipher"></a>

```typescript
public resetSslCipher(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetVerifyServerCertificate` <a name="resetVerifyServerCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.resetVerifyServerCertificate"></a>

```typescript
public resetVerifyServerCertificate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryIntervalInput">connectRetryIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePathInput">dumpFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTargetInput">failoverTargetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriodInput">masterHeartbeatPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipherInput">sslCipherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificateInput">verifyServerCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryInterval">connectRetryInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePath">dumpFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTarget">failoverTarget</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriod">masterHeartbeatPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipher">sslCipher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificate">verifyServerCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificateInput"></a>

```typescript
public readonly caCertificateInput: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `connectRetryIntervalInput`<sup>Optional</sup> <a name="connectRetryIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryIntervalInput"></a>

```typescript
public readonly connectRetryIntervalInput: number;
```

- *Type:* number

---

##### `dumpFilePathInput`<sup>Optional</sup> <a name="dumpFilePathInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePathInput"></a>

```typescript
public readonly dumpFilePathInput: string;
```

- *Type:* string

---

##### `failoverTargetInput`<sup>Optional</sup> <a name="failoverTargetInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTargetInput"></a>

```typescript
public readonly failoverTargetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `masterHeartbeatPeriodInput`<sup>Optional</sup> <a name="masterHeartbeatPeriodInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriodInput"></a>

```typescript
public readonly masterHeartbeatPeriodInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `sslCipherInput`<sup>Optional</sup> <a name="sslCipherInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipherInput"></a>

```typescript
public readonly sslCipherInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `verifyServerCertificateInput`<sup>Optional</sup> <a name="verifyServerCertificateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificateInput"></a>

```typescript
public readonly verifyServerCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `connectRetryInterval`<sup>Required</sup> <a name="connectRetryInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.connectRetryInterval"></a>

```typescript
public readonly connectRetryInterval: number;
```

- *Type:* number

---

##### `dumpFilePath`<sup>Required</sup> <a name="dumpFilePath" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.dumpFilePath"></a>

```typescript
public readonly dumpFilePath: string;
```

- *Type:* string

---

##### `failoverTarget`<sup>Required</sup> <a name="failoverTarget" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.failoverTarget"></a>

```typescript
public readonly failoverTarget: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `masterHeartbeatPeriod`<sup>Required</sup> <a name="masterHeartbeatPeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.masterHeartbeatPeriod"></a>

```typescript
public readonly masterHeartbeatPeriod: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `sslCipher`<sup>Required</sup> <a name="sslCipher" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.sslCipher"></a>

```typescript
public readonly sslCipher: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `verifyServerCertificate`<sup>Required</sup> <a name="verifyServerCertificate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.verifyServerCertificate"></a>

```typescript
public readonly verifyServerCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceReplicaConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceReplicaConfiguration">SqlDatabaseInstanceReplicaConfiguration</a>

---


### SqlDatabaseInstanceRestoreBackupContextOutputReference <a name="SqlDatabaseInstanceRestoreBackupContextOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resetProject">resetProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.resetProject"></a>

```typescript
public resetProject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunIdInput">backupRunIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunId">backupRunId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupRunIdInput`<sup>Optional</sup> <a name="backupRunIdInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunIdInput"></a>

```typescript
public readonly backupRunIdInput: number;
```

- *Type:* number

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `backupRunId`<sup>Required</sup> <a name="backupRunId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.backupRunId"></a>

```typescript
public readonly backupRunId: number;
```

- *Type:* number

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceRestoreBackupContext;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceRestoreBackupContext">SqlDatabaseInstanceRestoreBackupContext</a>

---


### SqlDatabaseInstanceServerCaCertList <a name="SqlDatabaseInstanceServerCaCertList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.get"></a>

```typescript
public get(index: number): SqlDatabaseInstanceServerCaCertOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SqlDatabaseInstanceServerCaCertOutputReference <a name="SqlDatabaseInstanceServerCaCertOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.cert">cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.sha1Fingerprint">sha1Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert">SqlDatabaseInstanceServerCaCert</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `sha1Fingerprint`<sup>Required</sup> <a name="sha1Fingerprint" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.sha1Fingerprint"></a>

```typescript
public readonly sha1Fingerprint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCertOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceServerCaCert;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceServerCaCert">SqlDatabaseInstanceServerCaCert</a>

---


### SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference <a name="SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceSettingsActiveDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---


### SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference <a name="SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">resetThreadsPerCore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetThreadsPerCore` <a name="resetThreadsPerCore" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```typescript
public resetThreadsPerCore(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">threadsPerCoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `threadsPerCoreInput`<sup>Optional</sup> <a name="threadsPerCoreInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```typescript
public readonly threadsPerCoreInput: number;
```

- *Type:* number

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceSettingsAdvancedMachineFeatures;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

---


### SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference <a name="SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resetRetentionUnit">resetRetentionUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRetentionUnit` <a name="resetRetentionUnit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.resetRetentionUnit"></a>

```typescript
public resetRetentionUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackupsInput">retainedBackupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnitInput">retentionUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups">retainedBackups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit">retentionUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retainedBackupsInput`<sup>Optional</sup> <a name="retainedBackupsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackupsInput"></a>

```typescript
public readonly retainedBackupsInput: number;
```

- *Type:* number

---

##### `retentionUnitInput`<sup>Optional</sup> <a name="retentionUnitInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnitInput"></a>

```typescript
public readonly retentionUnitInput: string;
```

- *Type:* string

---

##### `retainedBackups`<sup>Required</sup> <a name="retainedBackups" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retainedBackups"></a>

```typescript
public readonly retainedBackups: number;
```

- *Type:* number

---

##### `retentionUnit`<sup>Required</sup> <a name="retentionUnit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.retentionUnit"></a>

```typescript
public readonly retentionUnit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---


### SqlDatabaseInstanceSettingsBackupConfigurationOutputReference <a name="SqlDatabaseInstanceSettingsBackupConfigurationOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.putBackupRetentionSettings">putBackupRetentionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBackupRetentionSettings">resetBackupRetentionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBinaryLogEnabled">resetBinaryLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetPointInTimeRecoveryEnabled">resetPointInTimeRecoveryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetTransactionLogRetentionDays">resetTransactionLogRetentionDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupRetentionSettings` <a name="putBackupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.putBackupRetentionSettings"></a>

```typescript
public putBackupRetentionSettings(value: SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.putBackupRetentionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---

##### `resetBackupRetentionSettings` <a name="resetBackupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBackupRetentionSettings"></a>

```typescript
public resetBackupRetentionSettings(): void
```

##### `resetBinaryLogEnabled` <a name="resetBinaryLogEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetBinaryLogEnabled"></a>

```typescript
public resetBinaryLogEnabled(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetPointInTimeRecoveryEnabled` <a name="resetPointInTimeRecoveryEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetPointInTimeRecoveryEnabled"></a>

```typescript
public resetPointInTimeRecoveryEnabled(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetTransactionLogRetentionDays` <a name="resetTransactionLogRetentionDays" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.resetTransactionLogRetentionDays"></a>

```typescript
public resetTransactionLogRetentionDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettings">backupRetentionSettings</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettingsInput">backupRetentionSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabledInput">binaryLogEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabledInput">pointInTimeRecoveryEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDaysInput">transactionLogRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabled">binaryLogEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled">pointInTimeRecoveryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays">transactionLogRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupRetentionSettings`<sup>Required</sup> <a name="backupRetentionSettings" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettings"></a>

```typescript
public readonly backupRetentionSettings: SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference</a>

---

##### `backupRetentionSettingsInput`<sup>Optional</sup> <a name="backupRetentionSettingsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.backupRetentionSettingsInput"></a>

```typescript
public readonly backupRetentionSettingsInput: SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings">SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings</a>

---

##### `binaryLogEnabledInput`<sup>Optional</sup> <a name="binaryLogEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabledInput"></a>

```typescript
public readonly binaryLogEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `pointInTimeRecoveryEnabledInput`<sup>Optional</sup> <a name="pointInTimeRecoveryEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabledInput"></a>

```typescript
public readonly pointInTimeRecoveryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `transactionLogRetentionDaysInput`<sup>Optional</sup> <a name="transactionLogRetentionDaysInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDaysInput"></a>

```typescript
public readonly transactionLogRetentionDaysInput: number;
```

- *Type:* number

---

##### `binaryLogEnabled`<sup>Required</sup> <a name="binaryLogEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.binaryLogEnabled"></a>

```typescript
public readonly binaryLogEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `pointInTimeRecoveryEnabled`<sup>Required</sup> <a name="pointInTimeRecoveryEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```typescript
public readonly pointInTimeRecoveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `transactionLogRetentionDays`<sup>Required</sup> <a name="transactionLogRetentionDays" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.transactionLogRetentionDays"></a>

```typescript
public readonly transactionLogRetentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceSettingsBackupConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a>

---


### SqlDatabaseInstanceSettingsDatabaseFlagsList <a name="SqlDatabaseInstanceSettingsDatabaseFlagsList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.get"></a>

```typescript
public get(index: number): SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlDatabaseInstanceSettingsDatabaseFlags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a>[]

---


### SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference <a name="SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlDatabaseInstanceSettingsDatabaseFlags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a>

---


### SqlDatabaseInstanceSettingsDataCacheConfigOutputReference <a name="SqlDatabaseInstanceSettingsDataCacheConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resetDataCacheEnabled">resetDataCacheEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataCacheEnabled` <a name="resetDataCacheEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.resetDataCacheEnabled"></a>

```typescript
public resetDataCacheEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabledInput">dataCacheEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabled">dataCacheEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataCacheEnabledInput`<sup>Optional</sup> <a name="dataCacheEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabledInput"></a>

```typescript
public readonly dataCacheEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataCacheEnabled`<sup>Required</sup> <a name="dataCacheEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.dataCacheEnabled"></a>

```typescript
public readonly dataCacheEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceSettingsDataCacheConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a>

---


### SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference <a name="SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDateInput">endDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDateInput">startDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDateInput"></a>

```typescript
public readonly endDateInput: string;
```

- *Type:* string

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDateInput"></a>

```typescript
public readonly startDateInput: string;
```

- *Type:* string

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceSettingsDenyMaintenancePeriod;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---


### SqlDatabaseInstanceSettingsInsightsConfigOutputReference <a name="SqlDatabaseInstanceSettingsInsightsConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryInsightsEnabled">resetQueryInsightsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryPlansPerMinute">resetQueryPlansPerMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryStringLength">resetQueryStringLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordApplicationTags">resetRecordApplicationTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordClientAddress">resetRecordClientAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryInsightsEnabled` <a name="resetQueryInsightsEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryInsightsEnabled"></a>

```typescript
public resetQueryInsightsEnabled(): void
```

##### `resetQueryPlansPerMinute` <a name="resetQueryPlansPerMinute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryPlansPerMinute"></a>

```typescript
public resetQueryPlansPerMinute(): void
```

##### `resetQueryStringLength` <a name="resetQueryStringLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetQueryStringLength"></a>

```typescript
public resetQueryStringLength(): void
```

##### `resetRecordApplicationTags` <a name="resetRecordApplicationTags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordApplicationTags"></a>

```typescript
public resetRecordApplicationTags(): void
```

##### `resetRecordClientAddress` <a name="resetRecordClientAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.resetRecordClientAddress"></a>

```typescript
public resetRecordClientAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabledInput">queryInsightsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinuteInput">queryPlansPerMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLengthInput">queryStringLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTagsInput">recordApplicationTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddressInput">recordClientAddressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabled">queryInsightsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinute">queryPlansPerMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLength">queryStringLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTags">recordApplicationTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddress">recordClientAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryInsightsEnabledInput`<sup>Optional</sup> <a name="queryInsightsEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabledInput"></a>

```typescript
public readonly queryInsightsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryPlansPerMinuteInput`<sup>Optional</sup> <a name="queryPlansPerMinuteInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinuteInput"></a>

```typescript
public readonly queryPlansPerMinuteInput: number;
```

- *Type:* number

---

##### `queryStringLengthInput`<sup>Optional</sup> <a name="queryStringLengthInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLengthInput"></a>

```typescript
public readonly queryStringLengthInput: number;
```

- *Type:* number

---

##### `recordApplicationTagsInput`<sup>Optional</sup> <a name="recordApplicationTagsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTagsInput"></a>

```typescript
public readonly recordApplicationTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recordClientAddressInput`<sup>Optional</sup> <a name="recordClientAddressInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddressInput"></a>

```typescript
public readonly recordClientAddressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryInsightsEnabled`<sup>Required</sup> <a name="queryInsightsEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryInsightsEnabled"></a>

```typescript
public readonly queryInsightsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryPlansPerMinute`<sup>Required</sup> <a name="queryPlansPerMinute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```typescript
public readonly queryPlansPerMinute: number;
```

- *Type:* number

---

##### `queryStringLength`<sup>Required</sup> <a name="queryStringLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.queryStringLength"></a>

```typescript
public readonly queryStringLength: number;
```

- *Type:* number

---

##### `recordApplicationTags`<sup>Required</sup> <a name="recordApplicationTags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordApplicationTags"></a>

```typescript
public readonly recordApplicationTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recordClientAddress`<sup>Required</sup> <a name="recordClientAddress" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.recordClientAddress"></a>

```typescript
public readonly recordClientAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceSettingsInsightsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a>

---


### SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList <a name="SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get"></a>

```typescript
public get(index: number): SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>[]

---


### SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference <a name="SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetExpirationTime">resetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationTime` <a name="resetExpirationTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetExpirationTime"></a>

```typescript
public resetExpirationTime(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTimeInput">expirationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationTimeInput`<sup>Optional</sup> <a name="expirationTimeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTimeInput"></a>

```typescript
public readonly expirationTimeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>

---


### SqlDatabaseInstanceSettingsIpConfigurationOutputReference <a name="SqlDatabaseInstanceSettingsIpConfigurationOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putAuthorizedNetworks">putAuthorizedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putPscConfig">putPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAllocatedIpRange">resetAllocatedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAuthorizedNetworks">resetAuthorizedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetEnablePrivatePathForGoogleCloudServices">resetEnablePrivatePathForGoogleCloudServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetIpv4Enabled">resetIpv4Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPrivateNetwork">resetPrivateNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPscConfig">resetPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetServerCaMode">resetServerCaMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizedNetworks` <a name="putAuthorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putAuthorizedNetworks"></a>

```typescript
public putAuthorizedNetworks(value: IResolvable | SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putAuthorizedNetworks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>[]

---

##### `putPscConfig` <a name="putPscConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putPscConfig"></a>

```typescript
public putPscConfig(value: IResolvable | SqlDatabaseInstanceSettingsIpConfigurationPscConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.putPscConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>[]

---

##### `resetAllocatedIpRange` <a name="resetAllocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAllocatedIpRange"></a>

```typescript
public resetAllocatedIpRange(): void
```

##### `resetAuthorizedNetworks` <a name="resetAuthorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetAuthorizedNetworks"></a>

```typescript
public resetAuthorizedNetworks(): void
```

##### `resetEnablePrivatePathForGoogleCloudServices` <a name="resetEnablePrivatePathForGoogleCloudServices" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetEnablePrivatePathForGoogleCloudServices"></a>

```typescript
public resetEnablePrivatePathForGoogleCloudServices(): void
```

##### `resetIpv4Enabled` <a name="resetIpv4Enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetIpv4Enabled"></a>

```typescript
public resetIpv4Enabled(): void
```

##### `resetPrivateNetwork` <a name="resetPrivateNetwork" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPrivateNetwork"></a>

```typescript
public resetPrivateNetwork(): void
```

##### `resetPscConfig` <a name="resetPscConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetPscConfig"></a>

```typescript
public resetPscConfig(): void
```

##### `resetServerCaMode` <a name="resetServerCaMode" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetServerCaMode"></a>

```typescript
public resetServerCaMode(): void
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.resetSslMode"></a>

```typescript
public resetSslMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworks">authorizedNetworks</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList">SqlDatabaseInstanceSettingsIpConfigurationPscConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRangeInput">allocatedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworksInput">authorizedNetworksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServicesInput">enablePrivatePathForGoogleCloudServicesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4EnabledInput">ipv4EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetworkInput">privateNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfigInput">pscConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaModeInput">serverCaModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRange">allocatedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices">enablePrivatePathForGoogleCloudServices</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4Enabled">ipv4Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetwork">privateNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaMode">serverCaMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizedNetworks`<sup>Required</sup> <a name="authorizedNetworks" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworks"></a>

```typescript
public readonly authorizedNetworks: SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList</a>

---

##### `pscConfig`<sup>Required</sup> <a name="pscConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfig"></a>

```typescript
public readonly pscConfig: SqlDatabaseInstanceSettingsIpConfigurationPscConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList">SqlDatabaseInstanceSettingsIpConfigurationPscConfigList</a>

---

##### `allocatedIpRangeInput`<sup>Optional</sup> <a name="allocatedIpRangeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRangeInput"></a>

```typescript
public readonly allocatedIpRangeInput: string;
```

- *Type:* string

---

##### `authorizedNetworksInput`<sup>Optional</sup> <a name="authorizedNetworksInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.authorizedNetworksInput"></a>

```typescript
public readonly authorizedNetworksInput: IResolvable | SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks">SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks</a>[]

---

##### `enablePrivatePathForGoogleCloudServicesInput`<sup>Optional</sup> <a name="enablePrivatePathForGoogleCloudServicesInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServicesInput"></a>

```typescript
public readonly enablePrivatePathForGoogleCloudServicesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipv4EnabledInput`<sup>Optional</sup> <a name="ipv4EnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4EnabledInput"></a>

```typescript
public readonly ipv4EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateNetworkInput`<sup>Optional</sup> <a name="privateNetworkInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetworkInput"></a>

```typescript
public readonly privateNetworkInput: string;
```

- *Type:* string

---

##### `pscConfigInput`<sup>Optional</sup> <a name="pscConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.pscConfigInput"></a>

```typescript
public readonly pscConfigInput: IResolvable | SqlDatabaseInstanceSettingsIpConfigurationPscConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>[]

---

##### `serverCaModeInput`<sup>Optional</sup> <a name="serverCaModeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaModeInput"></a>

```typescript
public readonly serverCaModeInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `allocatedIpRange`<sup>Required</sup> <a name="allocatedIpRange" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.allocatedIpRange"></a>

```typescript
public readonly allocatedIpRange: string;
```

- *Type:* string

---

##### `enablePrivatePathForGoogleCloudServices`<sup>Required</sup> <a name="enablePrivatePathForGoogleCloudServices" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.enablePrivatePathForGoogleCloudServices"></a>

```typescript
public readonly enablePrivatePathForGoogleCloudServices: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipv4Enabled`<sup>Required</sup> <a name="ipv4Enabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.ipv4Enabled"></a>

```typescript
public readonly ipv4Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateNetwork`<sup>Required</sup> <a name="privateNetwork" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.privateNetwork"></a>

```typescript
public readonly privateNetwork: string;
```

- *Type:* string

---

##### `serverCaMode`<sup>Required</sup> <a name="serverCaMode" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.serverCaMode"></a>

```typescript
public readonly serverCaMode: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceSettingsIpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a>

---


### SqlDatabaseInstanceSettingsIpConfigurationPscConfigList <a name="SqlDatabaseInstanceSettingsIpConfigurationPscConfigList" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get"></a>

```typescript
public get(index: number): SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlDatabaseInstanceSettingsIpConfigurationPscConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>[]

---


### SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference <a name="SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetAllowedConsumerProjects">resetAllowedConsumerProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetPscEnabled">resetPscEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedConsumerProjects` <a name="resetAllowedConsumerProjects" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetAllowedConsumerProjects"></a>

```typescript
public resetAllowedConsumerProjects(): void
```

##### `resetPscEnabled` <a name="resetPscEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.resetPscEnabled"></a>

```typescript
public resetPscEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjectsInput">allowedConsumerProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabledInput">pscEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjects">allowedConsumerProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabled">pscEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedConsumerProjectsInput`<sup>Optional</sup> <a name="allowedConsumerProjectsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjectsInput"></a>

```typescript
public readonly allowedConsumerProjectsInput: string[];
```

- *Type:* string[]

---

##### `pscEnabledInput`<sup>Optional</sup> <a name="pscEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabledInput"></a>

```typescript
public readonly pscEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedConsumerProjects`<sup>Required</sup> <a name="allowedConsumerProjects" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.allowedConsumerProjects"></a>

```typescript
public readonly allowedConsumerProjects: string[];
```

- *Type:* string[]

---

##### `pscEnabled`<sup>Required</sup> <a name="pscEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.pscEnabled"></a>

```typescript
public readonly pscEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlDatabaseInstanceSettingsIpConfigurationPscConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationPscConfig">SqlDatabaseInstanceSettingsIpConfigurationPscConfig</a>

---


### SqlDatabaseInstanceSettingsLocationPreferenceOutputReference <a name="SqlDatabaseInstanceSettingsLocationPreferenceOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetFollowGaeApplication">resetFollowGaeApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetSecondaryZone">resetSecondaryZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetZone">resetZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFollowGaeApplication` <a name="resetFollowGaeApplication" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetFollowGaeApplication"></a>

```typescript
public resetFollowGaeApplication(): void
```

##### `resetSecondaryZone` <a name="resetSecondaryZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetSecondaryZone"></a>

```typescript
public resetSecondaryZone(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.resetZone"></a>

```typescript
public resetZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplicationInput">followGaeApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZoneInput">secondaryZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplication">followGaeApplication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZone">secondaryZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `followGaeApplicationInput`<sup>Optional</sup> <a name="followGaeApplicationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplicationInput"></a>

```typescript
public readonly followGaeApplicationInput: string;
```

- *Type:* string

---

##### `secondaryZoneInput`<sup>Optional</sup> <a name="secondaryZoneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZoneInput"></a>

```typescript
public readonly secondaryZoneInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `followGaeApplication`<sup>Required</sup> <a name="followGaeApplication" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.followGaeApplication"></a>

```typescript
public readonly followGaeApplication: string;
```

- *Type:* string

---

##### `secondaryZone`<sup>Required</sup> <a name="secondaryZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.secondaryZone"></a>

```typescript
public readonly secondaryZone: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceSettingsLocationPreference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a>

---


### SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference <a name="SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetHour">resetHour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetUpdateTrack">resetUpdateTrack</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetHour` <a name="resetHour" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetHour"></a>

```typescript
public resetHour(): void
```

##### `resetUpdateTrack` <a name="resetUpdateTrack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.resetUpdateTrack"></a>

```typescript
public resetUpdateTrack(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hourInput">hourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrackInput">updateTrackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrack">updateTrack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hourInput"></a>

```typescript
public readonly hourInput: number;
```

- *Type:* number

---

##### `updateTrackInput`<sup>Optional</sup> <a name="updateTrackInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrackInput"></a>

```typescript
public readonly updateTrackInput: string;
```

- *Type:* string

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `updateTrack`<sup>Required</sup> <a name="updateTrack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.updateTrack"></a>

```typescript
public readonly updateTrack: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceSettingsMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a>

---


### SqlDatabaseInstanceSettingsOutputReference <a name="SqlDatabaseInstanceSettingsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putActiveDirectoryConfig">putActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putAdvancedMachineFeatures">putAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration">putBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDatabaseFlags">putDatabaseFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDataCacheConfig">putDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod">putDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putInsightsConfig">putInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putIpConfiguration">putIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putLocationPreference">putLocationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy">putPasswordValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig">putSqlServerAuditConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetActivationPolicy">resetActivationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetActiveDirectoryConfig">resetActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetAdvancedMachineFeatures">resetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetAvailabilityType">resetAvailabilityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetBackupConfiguration">resetBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetCollation">resetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetConnectorEnforcement">resetConnectorEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDatabaseFlags">resetDatabaseFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDataCacheConfig">resetDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDenyMaintenancePeriod">resetDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresize">resetDiskAutoresize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresizeLimit">resetDiskAutoresizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskSize">resetDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetEnableDataplexIntegration">resetEnableDataplexIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetEnableGoogleMlIntegration">resetEnableGoogleMlIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetInsightsConfig">resetInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetIpConfiguration">resetIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetLocationPreference">resetLocationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetPasswordValidationPolicy">resetPasswordValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetPricingPlan">resetPricingPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetSqlServerAuditConfig">resetSqlServerAuditConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetUserLabels">resetUserLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveDirectoryConfig` <a name="putActiveDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putActiveDirectoryConfig"></a>

```typescript
public putActiveDirectoryConfig(value: SqlDatabaseInstanceSettingsActiveDirectoryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putActiveDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---

##### `putAdvancedMachineFeatures` <a name="putAdvancedMachineFeatures" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putAdvancedMachineFeatures"></a>

```typescript
public putAdvancedMachineFeatures(value: SqlDatabaseInstanceSettingsAdvancedMachineFeatures): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

---

##### `putBackupConfiguration` <a name="putBackupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration"></a>

```typescript
public putBackupConfiguration(value: SqlDatabaseInstanceSettingsBackupConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putBackupConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a>

---

##### `putDatabaseFlags` <a name="putDatabaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDatabaseFlags"></a>

```typescript
public putDatabaseFlags(value: IResolvable | SqlDatabaseInstanceSettingsDatabaseFlags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDatabaseFlags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a>[]

---

##### `putDataCacheConfig` <a name="putDataCacheConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDataCacheConfig"></a>

```typescript
public putDataCacheConfig(value: SqlDatabaseInstanceSettingsDataCacheConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDataCacheConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a>

---

##### `putDenyMaintenancePeriod` <a name="putDenyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod"></a>

```typescript
public putDenyMaintenancePeriod(value: SqlDatabaseInstanceSettingsDenyMaintenancePeriod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putDenyMaintenancePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---

##### `putInsightsConfig` <a name="putInsightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putInsightsConfig"></a>

```typescript
public putInsightsConfig(value: SqlDatabaseInstanceSettingsInsightsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putInsightsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a>

---

##### `putIpConfiguration` <a name="putIpConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putIpConfiguration"></a>

```typescript
public putIpConfiguration(value: SqlDatabaseInstanceSettingsIpConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putIpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a>

---

##### `putLocationPreference` <a name="putLocationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putLocationPreference"></a>

```typescript
public putLocationPreference(value: SqlDatabaseInstanceSettingsLocationPreference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putLocationPreference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: SqlDatabaseInstanceSettingsMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a>

---

##### `putPasswordValidationPolicy` <a name="putPasswordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy"></a>

```typescript
public putPasswordValidationPolicy(value: SqlDatabaseInstanceSettingsPasswordValidationPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putPasswordValidationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---

##### `putSqlServerAuditConfig` <a name="putSqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig"></a>

```typescript
public putSqlServerAuditConfig(value: SqlDatabaseInstanceSettingsSqlServerAuditConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.putSqlServerAuditConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---

##### `resetActivationPolicy` <a name="resetActivationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetActivationPolicy"></a>

```typescript
public resetActivationPolicy(): void
```

##### `resetActiveDirectoryConfig` <a name="resetActiveDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetActiveDirectoryConfig"></a>

```typescript
public resetActiveDirectoryConfig(): void
```

##### `resetAdvancedMachineFeatures` <a name="resetAdvancedMachineFeatures" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetAdvancedMachineFeatures"></a>

```typescript
public resetAdvancedMachineFeatures(): void
```

##### `resetAvailabilityType` <a name="resetAvailabilityType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetAvailabilityType"></a>

```typescript
public resetAvailabilityType(): void
```

##### `resetBackupConfiguration` <a name="resetBackupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetBackupConfiguration"></a>

```typescript
public resetBackupConfiguration(): void
```

##### `resetCollation` <a name="resetCollation" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetCollation"></a>

```typescript
public resetCollation(): void
```

##### `resetConnectorEnforcement` <a name="resetConnectorEnforcement" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetConnectorEnforcement"></a>

```typescript
public resetConnectorEnforcement(): void
```

##### `resetDatabaseFlags` <a name="resetDatabaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDatabaseFlags"></a>

```typescript
public resetDatabaseFlags(): void
```

##### `resetDataCacheConfig` <a name="resetDataCacheConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDataCacheConfig"></a>

```typescript
public resetDataCacheConfig(): void
```

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDeletionProtectionEnabled"></a>

```typescript
public resetDeletionProtectionEnabled(): void
```

##### `resetDenyMaintenancePeriod` <a name="resetDenyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDenyMaintenancePeriod"></a>

```typescript
public resetDenyMaintenancePeriod(): void
```

##### `resetDiskAutoresize` <a name="resetDiskAutoresize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresize"></a>

```typescript
public resetDiskAutoresize(): void
```

##### `resetDiskAutoresizeLimit` <a name="resetDiskAutoresizeLimit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskAutoresizeLimit"></a>

```typescript
public resetDiskAutoresizeLimit(): void
```

##### `resetDiskSize` <a name="resetDiskSize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskSize"></a>

```typescript
public resetDiskSize(): void
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetDiskType"></a>

```typescript
public resetDiskType(): void
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetEdition"></a>

```typescript
public resetEdition(): void
```

##### `resetEnableDataplexIntegration` <a name="resetEnableDataplexIntegration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetEnableDataplexIntegration"></a>

```typescript
public resetEnableDataplexIntegration(): void
```

##### `resetEnableGoogleMlIntegration` <a name="resetEnableGoogleMlIntegration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetEnableGoogleMlIntegration"></a>

```typescript
public resetEnableGoogleMlIntegration(): void
```

##### `resetInsightsConfig` <a name="resetInsightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetInsightsConfig"></a>

```typescript
public resetInsightsConfig(): void
```

##### `resetIpConfiguration` <a name="resetIpConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetIpConfiguration"></a>

```typescript
public resetIpConfiguration(): void
```

##### `resetLocationPreference` <a name="resetLocationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetLocationPreference"></a>

```typescript
public resetLocationPreference(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetPasswordValidationPolicy` <a name="resetPasswordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetPasswordValidationPolicy"></a>

```typescript
public resetPasswordValidationPolicy(): void
```

##### `resetPricingPlan` <a name="resetPricingPlan" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetPricingPlan"></a>

```typescript
public resetPricingPlan(): void
```

##### `resetSqlServerAuditConfig` <a name="resetSqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetSqlServerAuditConfig"></a>

```typescript
public resetSqlServerAuditConfig(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

##### `resetUserLabels` <a name="resetUserLabels" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.resetUserLabels"></a>

```typescript
public resetUserLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfig">activeDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference">SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference">SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.backupConfiguration">backupConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference">SqlDatabaseInstanceSettingsBackupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.databaseFlags">databaseFlags</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList">SqlDatabaseInstanceSettingsDatabaseFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfig">dataCacheConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference">SqlDatabaseInstanceSettingsDataCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriod">denyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference">SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.insightsConfig">insightsConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference">SqlDatabaseInstanceSettingsInsightsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference">SqlDatabaseInstanceSettingsIpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.locationPreference">locationPreference</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference">SqlDatabaseInstanceSettingsLocationPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference">SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicy">passwordValidationPolicy</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference">SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfig">sqlServerAuditConfig</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference">SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activationPolicyInput">activationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfigInput">activeDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeaturesInput">advancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.availabilityTypeInput">availabilityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.backupConfigurationInput">backupConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.collationInput">collationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcementInput">connectorEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.databaseFlagsInput">databaseFlagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfigInput">dataCacheConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriodInput">denyMaintenancePeriodInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeInput">diskAutoresizeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimitInput">diskAutoresizeLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskSizeInput">diskSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.editionInput">editionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.enableDataplexIntegrationInput">enableDataplexIntegrationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.enableGoogleMlIntegrationInput">enableGoogleMlIntegrationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.insightsConfigInput">insightsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.ipConfigurationInput">ipConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.locationPreferenceInput">locationPreferenceInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicyInput">passwordValidationPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.pricingPlanInput">pricingPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfigInput">sqlServerAuditConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.userLabelsInput">userLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activationPolicy">activationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.availabilityType">availabilityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.collation">collation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcement">connectorEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresize">diskAutoresize</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimit">diskAutoresizeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskSize">diskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.enableDataplexIntegration">enableDataplexIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.enableGoogleMlIntegration">enableGoogleMlIntegration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.pricingPlan">pricingPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.userLabels">userLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeDirectoryConfig`<sup>Required</sup> <a name="activeDirectoryConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfig"></a>

```typescript
public readonly activeDirectoryConfig: SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference">SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference</a>

---

##### `advancedMachineFeatures`<sup>Required</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeatures"></a>

```typescript
public readonly advancedMachineFeatures: SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference">SqlDatabaseInstanceSettingsAdvancedMachineFeaturesOutputReference</a>

---

##### `backupConfiguration`<sup>Required</sup> <a name="backupConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.backupConfiguration"></a>

```typescript
public readonly backupConfiguration: SqlDatabaseInstanceSettingsBackupConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfigurationOutputReference">SqlDatabaseInstanceSettingsBackupConfigurationOutputReference</a>

---

##### `databaseFlags`<sup>Required</sup> <a name="databaseFlags" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.databaseFlags"></a>

```typescript
public readonly databaseFlags: SqlDatabaseInstanceSettingsDatabaseFlagsList;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlagsList">SqlDatabaseInstanceSettingsDatabaseFlagsList</a>

---

##### `dataCacheConfig`<sup>Required</sup> <a name="dataCacheConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfig"></a>

```typescript
public readonly dataCacheConfig: SqlDatabaseInstanceSettingsDataCacheConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfigOutputReference">SqlDatabaseInstanceSettingsDataCacheConfigOutputReference</a>

---

##### `denyMaintenancePeriod`<sup>Required</sup> <a name="denyMaintenancePeriod" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriod"></a>

```typescript
public readonly denyMaintenancePeriod: SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference">SqlDatabaseInstanceSettingsDenyMaintenancePeriodOutputReference</a>

---

##### `insightsConfig`<sup>Required</sup> <a name="insightsConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.insightsConfig"></a>

```typescript
public readonly insightsConfig: SqlDatabaseInstanceSettingsInsightsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfigOutputReference">SqlDatabaseInstanceSettingsInsightsConfigOutputReference</a>

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.ipConfiguration"></a>

```typescript
public readonly ipConfiguration: SqlDatabaseInstanceSettingsIpConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfigurationOutputReference">SqlDatabaseInstanceSettingsIpConfigurationOutputReference</a>

---

##### `locationPreference`<sup>Required</sup> <a name="locationPreference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.locationPreference"></a>

```typescript
public readonly locationPreference: SqlDatabaseInstanceSettingsLocationPreferenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreferenceOutputReference">SqlDatabaseInstanceSettingsLocationPreferenceOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference">SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference</a>

---

##### `passwordValidationPolicy`<sup>Required</sup> <a name="passwordValidationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicy"></a>

```typescript
public readonly passwordValidationPolicy: SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference">SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference</a>

---

##### `sqlServerAuditConfig`<sup>Required</sup> <a name="sqlServerAuditConfig" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfig"></a>

```typescript
public readonly sqlServerAuditConfig: SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference">SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `activationPolicyInput`<sup>Optional</sup> <a name="activationPolicyInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activationPolicyInput"></a>

```typescript
public readonly activationPolicyInput: string;
```

- *Type:* string

---

##### `activeDirectoryConfigInput`<sup>Optional</sup> <a name="activeDirectoryConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activeDirectoryConfigInput"></a>

```typescript
public readonly activeDirectoryConfigInput: SqlDatabaseInstanceSettingsActiveDirectoryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsActiveDirectoryConfig">SqlDatabaseInstanceSettingsActiveDirectoryConfig</a>

---

##### `advancedMachineFeaturesInput`<sup>Optional</sup> <a name="advancedMachineFeaturesInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.advancedMachineFeaturesInput"></a>

```typescript
public readonly advancedMachineFeaturesInput: SqlDatabaseInstanceSettingsAdvancedMachineFeatures;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsAdvancedMachineFeatures">SqlDatabaseInstanceSettingsAdvancedMachineFeatures</a>

---

##### `availabilityTypeInput`<sup>Optional</sup> <a name="availabilityTypeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.availabilityTypeInput"></a>

```typescript
public readonly availabilityTypeInput: string;
```

- *Type:* string

---

##### `backupConfigurationInput`<sup>Optional</sup> <a name="backupConfigurationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.backupConfigurationInput"></a>

```typescript
public readonly backupConfigurationInput: SqlDatabaseInstanceSettingsBackupConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsBackupConfiguration">SqlDatabaseInstanceSettingsBackupConfiguration</a>

---

##### `collationInput`<sup>Optional</sup> <a name="collationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.collationInput"></a>

```typescript
public readonly collationInput: string;
```

- *Type:* string

---

##### `connectorEnforcementInput`<sup>Optional</sup> <a name="connectorEnforcementInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcementInput"></a>

```typescript
public readonly connectorEnforcementInput: string;
```

- *Type:* string

---

##### `databaseFlagsInput`<sup>Optional</sup> <a name="databaseFlagsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.databaseFlagsInput"></a>

```typescript
public readonly databaseFlagsInput: IResolvable | SqlDatabaseInstanceSettingsDatabaseFlags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDatabaseFlags">SqlDatabaseInstanceSettingsDatabaseFlags</a>[]

---

##### `dataCacheConfigInput`<sup>Optional</sup> <a name="dataCacheConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.dataCacheConfigInput"></a>

```typescript
public readonly dataCacheConfigInput: SqlDatabaseInstanceSettingsDataCacheConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDataCacheConfig">SqlDatabaseInstanceSettingsDataCacheConfig</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabledInput"></a>

```typescript
public readonly deletionProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `denyMaintenancePeriodInput`<sup>Optional</sup> <a name="denyMaintenancePeriodInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.denyMaintenancePeriodInput"></a>

```typescript
public readonly denyMaintenancePeriodInput: SqlDatabaseInstanceSettingsDenyMaintenancePeriod;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsDenyMaintenancePeriod">SqlDatabaseInstanceSettingsDenyMaintenancePeriod</a>

---

##### `diskAutoresizeInput`<sup>Optional</sup> <a name="diskAutoresizeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeInput"></a>

```typescript
public readonly diskAutoresizeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskAutoresizeLimitInput`<sup>Optional</sup> <a name="diskAutoresizeLimitInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimitInput"></a>

```typescript
public readonly diskAutoresizeLimitInput: number;
```

- *Type:* number

---

##### `diskSizeInput`<sup>Optional</sup> <a name="diskSizeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskSizeInput"></a>

```typescript
public readonly diskSizeInput: number;
```

- *Type:* number

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskTypeInput"></a>

```typescript
public readonly diskTypeInput: string;
```

- *Type:* string

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.editionInput"></a>

```typescript
public readonly editionInput: string;
```

- *Type:* string

---

##### `enableDataplexIntegrationInput`<sup>Optional</sup> <a name="enableDataplexIntegrationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.enableDataplexIntegrationInput"></a>

```typescript
public readonly enableDataplexIntegrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableGoogleMlIntegrationInput`<sup>Optional</sup> <a name="enableGoogleMlIntegrationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.enableGoogleMlIntegrationInput"></a>

```typescript
public readonly enableGoogleMlIntegrationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `insightsConfigInput`<sup>Optional</sup> <a name="insightsConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.insightsConfigInput"></a>

```typescript
public readonly insightsConfigInput: SqlDatabaseInstanceSettingsInsightsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsInsightsConfig">SqlDatabaseInstanceSettingsInsightsConfig</a>

---

##### `ipConfigurationInput`<sup>Optional</sup> <a name="ipConfigurationInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.ipConfigurationInput"></a>

```typescript
public readonly ipConfigurationInput: SqlDatabaseInstanceSettingsIpConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsIpConfiguration">SqlDatabaseInstanceSettingsIpConfiguration</a>

---

##### `locationPreferenceInput`<sup>Optional</sup> <a name="locationPreferenceInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.locationPreferenceInput"></a>

```typescript
public readonly locationPreferenceInput: SqlDatabaseInstanceSettingsLocationPreference;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsLocationPreference">SqlDatabaseInstanceSettingsLocationPreference</a>

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: SqlDatabaseInstanceSettingsMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsMaintenanceWindow">SqlDatabaseInstanceSettingsMaintenanceWindow</a>

---

##### `passwordValidationPolicyInput`<sup>Optional</sup> <a name="passwordValidationPolicyInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.passwordValidationPolicyInput"></a>

```typescript
public readonly passwordValidationPolicyInput: SqlDatabaseInstanceSettingsPasswordValidationPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---

##### `pricingPlanInput`<sup>Optional</sup> <a name="pricingPlanInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.pricingPlanInput"></a>

```typescript
public readonly pricingPlanInput: string;
```

- *Type:* string

---

##### `sqlServerAuditConfigInput`<sup>Optional</sup> <a name="sqlServerAuditConfigInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.sqlServerAuditConfigInput"></a>

```typescript
public readonly sqlServerAuditConfigInput: SqlDatabaseInstanceSettingsSqlServerAuditConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `userLabelsInput`<sup>Optional</sup> <a name="userLabelsInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.userLabelsInput"></a>

```typescript
public readonly userLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `activationPolicy`<sup>Required</sup> <a name="activationPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.activationPolicy"></a>

```typescript
public readonly activationPolicy: string;
```

- *Type:* string

---

##### `availabilityType`<sup>Required</sup> <a name="availabilityType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.availabilityType"></a>

```typescript
public readonly availabilityType: string;
```

- *Type:* string

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.collation"></a>

```typescript
public readonly collation: string;
```

- *Type:* string

---

##### `connectorEnforcement`<sup>Required</sup> <a name="connectorEnforcement" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.connectorEnforcement"></a>

```typescript
public readonly connectorEnforcement: string;
```

- *Type:* string

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskAutoresize`<sup>Required</sup> <a name="diskAutoresize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresize"></a>

```typescript
public readonly diskAutoresize: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskAutoresizeLimit`<sup>Required</sup> <a name="diskAutoresizeLimit" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskAutoresizeLimit"></a>

```typescript
public readonly diskAutoresizeLimit: number;
```

- *Type:* number

---

##### `diskSize`<sup>Required</sup> <a name="diskSize" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* number

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `enableDataplexIntegration`<sup>Required</sup> <a name="enableDataplexIntegration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.enableDataplexIntegration"></a>

```typescript
public readonly enableDataplexIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableGoogleMlIntegration`<sup>Required</sup> <a name="enableGoogleMlIntegration" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.enableGoogleMlIntegration"></a>

```typescript
public readonly enableGoogleMlIntegration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pricingPlan`<sup>Required</sup> <a name="pricingPlan" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.pricingPlan"></a>

```typescript
public readonly pricingPlan: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.userLabels"></a>

```typescript
public readonly userLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceSettings;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettings">SqlDatabaseInstanceSettings</a>

---


### SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference <a name="SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetComplexity">resetComplexity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetDisallowUsernameSubstring">resetDisallowUsernameSubstring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetMinLength">resetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetPasswordChangeInterval">resetPasswordChangeInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetReuseInterval">resetReuseInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComplexity` <a name="resetComplexity" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetComplexity"></a>

```typescript
public resetComplexity(): void
```

##### `resetDisallowUsernameSubstring` <a name="resetDisallowUsernameSubstring" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetDisallowUsernameSubstring"></a>

```typescript
public resetDisallowUsernameSubstring(): void
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetMinLength"></a>

```typescript
public resetMinLength(): void
```

##### `resetPasswordChangeInterval` <a name="resetPasswordChangeInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetPasswordChangeInterval"></a>

```typescript
public resetPasswordChangeInterval(): void
```

##### `resetReuseInterval` <a name="resetReuseInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.resetReuseInterval"></a>

```typescript
public resetReuseInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexityInput">complexityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstringInput">disallowUsernameSubstringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicyInput">enablePasswordPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLengthInput">minLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeIntervalInput">passwordChangeIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseIntervalInput">reuseIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexity">complexity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring">disallowUsernameSubstring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy">enablePasswordPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval">passwordChangeInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseInterval">reuseInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `complexityInput`<sup>Optional</sup> <a name="complexityInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexityInput"></a>

```typescript
public readonly complexityInput: string;
```

- *Type:* string

---

##### `disallowUsernameSubstringInput`<sup>Optional</sup> <a name="disallowUsernameSubstringInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstringInput"></a>

```typescript
public readonly disallowUsernameSubstringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePasswordPolicyInput`<sup>Optional</sup> <a name="enablePasswordPolicyInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicyInput"></a>

```typescript
public readonly enablePasswordPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLengthInput"></a>

```typescript
public readonly minLengthInput: number;
```

- *Type:* number

---

##### `passwordChangeIntervalInput`<sup>Optional</sup> <a name="passwordChangeIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeIntervalInput"></a>

```typescript
public readonly passwordChangeIntervalInput: string;
```

- *Type:* string

---

##### `reuseIntervalInput`<sup>Optional</sup> <a name="reuseIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseIntervalInput"></a>

```typescript
public readonly reuseIntervalInput: number;
```

- *Type:* number

---

##### `complexity`<sup>Required</sup> <a name="complexity" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.complexity"></a>

```typescript
public readonly complexity: string;
```

- *Type:* string

---

##### `disallowUsernameSubstring`<sup>Required</sup> <a name="disallowUsernameSubstring" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.disallowUsernameSubstring"></a>

```typescript
public readonly disallowUsernameSubstring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePasswordPolicy`<sup>Required</sup> <a name="enablePasswordPolicy" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.enablePasswordPolicy"></a>

```typescript
public readonly enablePasswordPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `passwordChangeInterval`<sup>Required</sup> <a name="passwordChangeInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.passwordChangeInterval"></a>

```typescript
public readonly passwordChangeInterval: string;
```

- *Type:* string

---

##### `reuseInterval`<sup>Required</sup> <a name="reuseInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.reuseInterval"></a>

```typescript
public readonly reuseInterval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceSettingsPasswordValidationPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsPasswordValidationPolicy">SqlDatabaseInstanceSettingsPasswordValidationPolicy</a>

---


### SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference <a name="SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetRetentionInterval">resetRetentionInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetUploadInterval">resetUploadInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetRetentionInterval` <a name="resetRetentionInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetRetentionInterval"></a>

```typescript
public resetRetentionInterval(): void
```

##### `resetUploadInterval` <a name="resetUploadInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.resetUploadInterval"></a>

```typescript
public resetUploadInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionIntervalInput">retentionIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadIntervalInput">uploadIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionInterval">retentionInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadInterval">uploadInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `retentionIntervalInput`<sup>Optional</sup> <a name="retentionIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionIntervalInput"></a>

```typescript
public readonly retentionIntervalInput: string;
```

- *Type:* string

---

##### `uploadIntervalInput`<sup>Optional</sup> <a name="uploadIntervalInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadIntervalInput"></a>

```typescript
public readonly uploadIntervalInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `retentionInterval`<sup>Required</sup> <a name="retentionInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.retentionInterval"></a>

```typescript
public readonly retentionInterval: string;
```

- *Type:* string

---

##### `uploadInterval`<sup>Required</sup> <a name="uploadInterval" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.uploadInterval"></a>

```typescript
public readonly uploadInterval: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SqlDatabaseInstanceSettingsSqlServerAuditConfig;
```

- *Type:* <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceSettingsSqlServerAuditConfig">SqlDatabaseInstanceSettingsSqlServerAuditConfig</a>

---


### SqlDatabaseInstanceTimeoutsOutputReference <a name="SqlDatabaseInstanceTimeoutsOutputReference" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { sqlDatabaseInstance } from '@cdktf/provider-google'

new sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SqlDatabaseInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sqlDatabaseInstance.SqlDatabaseInstanceTimeouts">SqlDatabaseInstanceTimeouts</a>

---



