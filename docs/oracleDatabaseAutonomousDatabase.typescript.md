# `oracleDatabaseAutonomousDatabase` Submodule <a name="`oracleDatabaseAutonomousDatabase` Submodule" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseAutonomousDatabase <a name="OracleDatabaseAutonomousDatabase" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database google_oracle_database_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase(scope: Construct, id: string, config: OracleDatabaseAutonomousDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig">OracleDatabaseAutonomousDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig">OracleDatabaseAutonomousDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.putProperties"></a>

```typescript
public putProperties(value: OracleDatabaseAutonomousDatabaseProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties">OracleDatabaseAutonomousDatabaseProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.putTimeouts"></a>

```typescript
public putTimeouts(value: OracleDatabaseAutonomousDatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts">OracleDatabaseAutonomousDatabaseTimeouts</a>

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetAdminPassword"></a>

```typescript
public resetAdminPassword(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OracleDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isConstruct"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isTerraformElement"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isTerraformResource"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.generateConfigForImport"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OracleDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleDatabaseAutonomousDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleDatabaseAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OracleDatabaseAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.entitlementId">entitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference">OracleDatabaseAutonomousDatabasePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference">OracleDatabaseAutonomousDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.adminPasswordInput">adminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.autonomousDatabaseIdInput">autonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties">OracleDatabaseAutonomousDatabaseProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts">OracleDatabaseAutonomousDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.properties"></a>

```typescript
public readonly properties: OracleDatabaseAutonomousDatabasePropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference">OracleDatabaseAutonomousDatabasePropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseAutonomousDatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference">OracleDatabaseAutonomousDatabaseTimeoutsOutputReference</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.adminPasswordInput"></a>

```typescript
public readonly adminPasswordInput: string;
```

- *Type:* string

---

##### `autonomousDatabaseIdInput`<sup>Optional</sup> <a name="autonomousDatabaseIdInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.autonomousDatabaseIdInput"></a>

```typescript
public readonly autonomousDatabaseIdInput: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: OracleDatabaseAutonomousDatabaseProperties;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties">OracleDatabaseAutonomousDatabaseProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OracleDatabaseAutonomousDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts">OracleDatabaseAutonomousDatabaseTimeouts</a>

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseAutonomousDatabaseConfig <a name="OracleDatabaseAutonomousDatabaseConfig" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

const oracleDatabaseAutonomousDatabaseConfig: oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | The ID of the Autonomous Database to create. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.cidr">cidr</a></code> | <code>string</code> | The subnet CIDR range for the Autonmous Database. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.database">database</a></code> | <code>string</code> | The name of the Autonomous Database. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/AutonomousDatabaseBackup'. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.network">network</a></code> | <code>string</code> | The name of the VPC network used by the Autonomous Database. Format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties">OracleDatabaseAutonomousDatabaseProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.adminPassword">adminPassword</a></code> | <code>string</code> | The password for the default ADMIN user. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for the Autonomous Database. The name does not have to be unique within your project. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#id OracleDatabaseAutonomousDatabase#id}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels or tags associated with the Autonomous Database. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#project OracleDatabaseAutonomousDatabase#project}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts">OracleDatabaseAutonomousDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

The ID of the Autonomous Database to create.

This value is restricted
to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#autonomous_database_id OracleDatabaseAutonomousDatabase#autonomous_database_id}

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

The subnet CIDR range for the Autonmous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#cidr OracleDatabaseAutonomousDatabase#cidr}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The name of the Autonomous Database.

The database name must be unique in
the project. The name must begin with a letter and can
contain a maximum of 30 alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#database OracleDatabaseAutonomousDatabase#database}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/AutonomousDatabaseBackup'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#location OracleDatabaseAutonomousDatabase#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name of the VPC network used by the Autonomous Database. Format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#network OracleDatabaseAutonomousDatabase#network}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.properties"></a>

```typescript
public readonly properties: OracleDatabaseAutonomousDatabaseProperties;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties">OracleDatabaseAutonomousDatabaseProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#properties OracleDatabaseAutonomousDatabase#properties}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

The password for the default ADMIN user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#admin_password OracleDatabaseAutonomousDatabase#admin_password}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#deletion_protection OracleDatabaseAutonomousDatabase#deletion_protection}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the Autonomous Database. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#display_name OracleDatabaseAutonomousDatabase#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#id OracleDatabaseAutonomousDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels or tags associated with the Autonomous Database.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#labels OracleDatabaseAutonomousDatabase#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#project OracleDatabaseAutonomousDatabase#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseAutonomousDatabaseTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts">OracleDatabaseAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#timeouts OracleDatabaseAutonomousDatabase#timeouts}

---

### OracleDatabaseAutonomousDatabaseProperties <a name="OracleDatabaseAutonomousDatabaseProperties" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

const oracleDatabaseAutonomousDatabaseProperties: oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dbWorkload">dbWorkload</a></code> | <code>string</code> | Possible values:  DB_WORKLOAD_UNSPECIFIED OLTP DW AJD APEX. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.licenseType">licenseType</a></code> | <code>string</code> | The license type used for the Autonomous Database.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.backupRetentionPeriodDays">backupRetentionPeriodDays</a></code> | <code>number</code> | The retention period for the Autonomous Database. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.characterSet">characterSet</a></code> | <code>string</code> | The character set for the Autonomous Database. The default is AL32UTF8. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.computeCount">computeCount</a></code> | <code>number</code> | The number of compute servers for the Autonomous Database. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.customerContacts">customerContacts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts">OracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>[]</code> | customer_contacts block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dataStorageSizeGb">dataStorageSizeGb</a></code> | <code>number</code> | The size of the data stored in the database, in gigabytes. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dataStorageSizeTb">dataStorageSizeTb</a></code> | <code>number</code> | The size of the data stored in the database, in terabytes. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dbEdition">dbEdition</a></code> | <code>string</code> | The edition of the Autonomous Databases.   Possible values:  DATABASE_EDITION_UNSPECIFIED STANDARD_EDITION ENTERPRISE_EDITION. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dbVersion">dbVersion</a></code> | <code>string</code> | The Oracle Database version for the Autonomous Database. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | This field indicates if auto scaling is enabled for the Autonomous Database CPU core count. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.isStorageAutoScalingEnabled">isStorageAutoScalingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | This field indicates if auto scaling is enabled for the Autonomous Database storage. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.maintenanceScheduleType">maintenanceScheduleType</a></code> | <code>string</code> | The maintenance schedule of the Autonomous Database.   Possible values:  MAINTENANCE_SCHEDULE_TYPE_UNSPECIFIED EARLY REGULAR. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | This field specifies if the Autonomous Database requires mTLS connections. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.nCharacterSet">nCharacterSet</a></code> | <code>string</code> | The national character set for the Autonomous Database. The default is AL16UTF16. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.operationsInsightsState">operationsInsightsState</a></code> | <code>string</code> | Possible values:  OPERATIONS_INSIGHTS_STATE_UNSPECIFIED ENABLING ENABLED DISABLING NOT_ENABLED FAILED_ENABLING FAILED_DISABLING. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | The private endpoint IP address for the Autonomous Database. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>string</code> | The private endpoint label for the Autonomous Database. |

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dbWorkload"></a>

```typescript
public readonly dbWorkload: string;
```

- *Type:* string

Possible values:  DB_WORKLOAD_UNSPECIFIED OLTP DW AJD APEX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#db_workload OracleDatabaseAutonomousDatabase#db_workload}

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

The license type used for the Autonomous Database.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#license_type OracleDatabaseAutonomousDatabase#license_type}

---

##### `backupRetentionPeriodDays`<sup>Optional</sup> <a name="backupRetentionPeriodDays" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.backupRetentionPeriodDays"></a>

```typescript
public readonly backupRetentionPeriodDays: number;
```

- *Type:* number

The retention period for the Autonomous Database.

This field is specified
in days, can range from 1 day to 60 days, and has a default value of
60 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#backup_retention_period_days OracleDatabaseAutonomousDatabase#backup_retention_period_days}

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

The character set for the Autonomous Database. The default is AL32UTF8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#character_set OracleDatabaseAutonomousDatabase#character_set}

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

The number of compute servers for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#compute_count OracleDatabaseAutonomousDatabase#compute_count}

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.customerContacts"></a>

```typescript
public readonly customerContacts: IResolvable | OracleDatabaseAutonomousDatabasePropertiesCustomerContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts">OracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>[]

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#customer_contacts OracleDatabaseAutonomousDatabase#customer_contacts}

---

##### `dataStorageSizeGb`<sup>Optional</sup> <a name="dataStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dataStorageSizeGb"></a>

```typescript
public readonly dataStorageSizeGb: number;
```

- *Type:* number

The size of the data stored in the database, in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#data_storage_size_gb OracleDatabaseAutonomousDatabase#data_storage_size_gb}

---

##### `dataStorageSizeTb`<sup>Optional</sup> <a name="dataStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dataStorageSizeTb"></a>

```typescript
public readonly dataStorageSizeTb: number;
```

- *Type:* number

The size of the data stored in the database, in terabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#data_storage_size_tb OracleDatabaseAutonomousDatabase#data_storage_size_tb}

---

##### `dbEdition`<sup>Optional</sup> <a name="dbEdition" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dbEdition"></a>

```typescript
public readonly dbEdition: string;
```

- *Type:* string

The edition of the Autonomous Databases.   Possible values:  DATABASE_EDITION_UNSPECIFIED STANDARD_EDITION ENTERPRISE_EDITION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#db_edition OracleDatabaseAutonomousDatabase#db_edition}

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

The Oracle Database version for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#db_version OracleDatabaseAutonomousDatabase#db_version}

---

##### `isAutoScalingEnabled`<sup>Optional</sup> <a name="isAutoScalingEnabled" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.isAutoScalingEnabled"></a>

```typescript
public readonly isAutoScalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This field indicates if auto scaling is enabled for the Autonomous Database CPU core count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#is_auto_scaling_enabled OracleDatabaseAutonomousDatabase#is_auto_scaling_enabled}

---

##### `isStorageAutoScalingEnabled`<sup>Optional</sup> <a name="isStorageAutoScalingEnabled" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.isStorageAutoScalingEnabled"></a>

```typescript
public readonly isStorageAutoScalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This field indicates if auto scaling is enabled for the Autonomous Database storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#is_storage_auto_scaling_enabled OracleDatabaseAutonomousDatabase#is_storage_auto_scaling_enabled}

---

##### `maintenanceScheduleType`<sup>Optional</sup> <a name="maintenanceScheduleType" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.maintenanceScheduleType"></a>

```typescript
public readonly maintenanceScheduleType: string;
```

- *Type:* string

The maintenance schedule of the Autonomous Database.   Possible values:  MAINTENANCE_SCHEDULE_TYPE_UNSPECIFIED EARLY REGULAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#maintenance_schedule_type OracleDatabaseAutonomousDatabase#maintenance_schedule_type}

---

##### `mtlsConnectionRequired`<sup>Optional</sup> <a name="mtlsConnectionRequired" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.mtlsConnectionRequired"></a>

```typescript
public readonly mtlsConnectionRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This field specifies if the Autonomous Database requires mTLS connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#mtls_connection_required OracleDatabaseAutonomousDatabase#mtls_connection_required}

---

##### `nCharacterSet`<sup>Optional</sup> <a name="nCharacterSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.nCharacterSet"></a>

```typescript
public readonly nCharacterSet: string;
```

- *Type:* string

The national character set for the Autonomous Database. The default is AL16UTF16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#n_character_set OracleDatabaseAutonomousDatabase#n_character_set}

---

##### `operationsInsightsState`<sup>Optional</sup> <a name="operationsInsightsState" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.operationsInsightsState"></a>

```typescript
public readonly operationsInsightsState: string;
```

- *Type:* string

Possible values:  OPERATIONS_INSIGHTS_STATE_UNSPECIFIED ENABLING ENABLED DISABLING NOT_ENABLED FAILED_ENABLING FAILED_DISABLING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#operations_insights_state OracleDatabaseAutonomousDatabase#operations_insights_state}

---

##### `privateEndpointIp`<sup>Optional</sup> <a name="privateEndpointIp" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

The private endpoint IP address for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#private_endpoint_ip OracleDatabaseAutonomousDatabase#private_endpoint_ip}

---

##### `privateEndpointLabel`<sup>Optional</sup> <a name="privateEndpointLabel" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.privateEndpointLabel"></a>

```typescript
public readonly privateEndpointLabel: string;
```

- *Type:* string

The private endpoint label for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#private_endpoint_label OracleDatabaseAutonomousDatabase#private_endpoint_label}

---

### OracleDatabaseAutonomousDatabasePropertiesApexDetails <a name="OracleDatabaseAutonomousDatabasePropertiesApexDetails" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetails.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

const oracleDatabaseAutonomousDatabasePropertiesApexDetails: oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetails = { ... }
```


### OracleDatabaseAutonomousDatabasePropertiesConnectionStrings <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStrings" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStrings.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

const oracleDatabaseAutonomousDatabasePropertiesConnectionStrings: oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStrings = { ... }
```


### OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

const oracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings: oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings = { ... }
```


### OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

const oracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles: oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles = { ... }
```


### OracleDatabaseAutonomousDatabasePropertiesConnectionUrls <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionUrls" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrls.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

const oracleDatabaseAutonomousDatabasePropertiesConnectionUrls: oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrls = { ... }
```


### OracleDatabaseAutonomousDatabasePropertiesCustomerContacts <a name="OracleDatabaseAutonomousDatabasePropertiesCustomerContacts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

const oracleDatabaseAutonomousDatabasePropertiesCustomerContacts: oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts.property.email">email</a></code> | <code>string</code> | The email address used by Oracle to send notifications regarding databases and infrastructure. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The email address used by Oracle to send notifications regarding databases and infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#email OracleDatabaseAutonomousDatabase#email}

---

### OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb <a name="OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

const oracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb: oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb = { ... }
```


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

const oracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails: oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails = { ... }
```


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

const oracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime: oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime = { ... }
```


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

const oracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime: oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime = { ... }
```


### OracleDatabaseAutonomousDatabaseTimeouts <a name="OracleDatabaseAutonomousDatabaseTimeouts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

const oracleDatabaseAutonomousDatabaseTimeouts: oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#create OracleDatabaseAutonomousDatabase#create}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#delete OracleDatabaseAutonomousDatabase#delete}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#update OracleDatabaseAutonomousDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#create OracleDatabaseAutonomousDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#delete OracleDatabaseAutonomousDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_autonomous_database#update OracleDatabaseAutonomousDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseAutonomousDatabasePropertiesApexDetailsList <a name="OracleDatabaseAutonomousDatabasePropertiesApexDetailsList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get"></a>

```typescript
public get(index: number): OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.apexVersion">apexVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.ordsVersion">ordsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetails">OracleDatabaseAutonomousDatabasePropertiesApexDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apexVersion`<sup>Required</sup> <a name="apexVersion" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.apexVersion"></a>

```typescript
public readonly apexVersion: string;
```

- *Type:* string

---

##### `ordsVersion`<sup>Required</sup> <a name="ordsVersion" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.ordsVersion"></a>

```typescript
public readonly ordsVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseAutonomousDatabasePropertiesApexDetails;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetails">OracleDatabaseAutonomousDatabasePropertiesApexDetails</a>

---


### OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get"></a>

```typescript
public get(index: number): OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.high">high</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.low">low</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.medium">medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `high`<sup>Required</sup> <a name="high" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.high"></a>

```typescript
public readonly high: string;
```

- *Type:* string

---

##### `low`<sup>Required</sup> <a name="low" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.low"></a>

```typescript
public readonly low: string;
```

- *Type:* string

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.medium"></a>

```typescript
public readonly medium: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings</a>

---


### OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get"></a>

```typescript
public get(index: number): OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.dedicated">dedicated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.high">high</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.low">low</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.medium">medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.profiles">profiles</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStrings">OracleDatabaseAutonomousDatabasePropertiesConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.allConnectionStrings"></a>

```typescript
public readonly allConnectionStrings: OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList</a>

---

##### `dedicated`<sup>Required</sup> <a name="dedicated" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.dedicated"></a>

```typescript
public readonly dedicated: string;
```

- *Type:* string

---

##### `high`<sup>Required</sup> <a name="high" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.high"></a>

```typescript
public readonly high: string;
```

- *Type:* string

---

##### `low`<sup>Required</sup> <a name="low" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.low"></a>

```typescript
public readonly low: string;
```

- *Type:* string

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.medium"></a>

```typescript
public readonly medium: string;
```

- *Type:* string

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.profiles"></a>

```typescript
public readonly profiles: OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseAutonomousDatabasePropertiesConnectionStrings;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStrings">OracleDatabaseAutonomousDatabasePropertiesConnectionStrings</a>

---


### OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get"></a>

```typescript
public get(index: number): OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.consumerGroup">consumerGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.hostFormat">hostFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.isRegional">isRegional</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.sessionMode">sessionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.syntaxFormat">syntaxFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.tlsAuthentication">tlsAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```typescript
public readonly consumerGroup: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `hostFormat`<sup>Required</sup> <a name="hostFormat" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```typescript
public readonly hostFormat: string;
```

- *Type:* string

---

##### `isRegional`<sup>Required</sup> <a name="isRegional" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.isRegional"></a>

```typescript
public readonly isRegional: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sessionMode`<sup>Required</sup> <a name="sessionMode" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```typescript
public readonly sessionMode: string;
```

- *Type:* string

---

##### `syntaxFormat`<sup>Required</sup> <a name="syntaxFormat" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```typescript
public readonly syntaxFormat: string;
```

- *Type:* string

---

##### `tlsAuthentication`<sup>Required</sup> <a name="tlsAuthentication" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```typescript
public readonly tlsAuthentication: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles</a>

---


### OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get"></a>

```typescript
public get(index: number): OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.apexUri">apexUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.databaseTransformsUri">databaseTransformsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.graphStudioUri">graphStudioUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningNotebookUri">machineLearningNotebookUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningUserManagementUri">machineLearningUserManagementUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.mongoDbUri">mongoDbUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.ordsUri">ordsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.sqlDevWebUri">sqlDevWebUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrls">OracleDatabaseAutonomousDatabasePropertiesConnectionUrls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apexUri`<sup>Required</sup> <a name="apexUri" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.apexUri"></a>

```typescript
public readonly apexUri: string;
```

- *Type:* string

---

##### `databaseTransformsUri`<sup>Required</sup> <a name="databaseTransformsUri" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.databaseTransformsUri"></a>

```typescript
public readonly databaseTransformsUri: string;
```

- *Type:* string

---

##### `graphStudioUri`<sup>Required</sup> <a name="graphStudioUri" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.graphStudioUri"></a>

```typescript
public readonly graphStudioUri: string;
```

- *Type:* string

---

##### `machineLearningNotebookUri`<sup>Required</sup> <a name="machineLearningNotebookUri" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningNotebookUri"></a>

```typescript
public readonly machineLearningNotebookUri: string;
```

- *Type:* string

---

##### `machineLearningUserManagementUri`<sup>Required</sup> <a name="machineLearningUserManagementUri" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningUserManagementUri"></a>

```typescript
public readonly machineLearningUserManagementUri: string;
```

- *Type:* string

---

##### `mongoDbUri`<sup>Required</sup> <a name="mongoDbUri" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.mongoDbUri"></a>

```typescript
public readonly mongoDbUri: string;
```

- *Type:* string

---

##### `ordsUri`<sup>Required</sup> <a name="ordsUri" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.ordsUri"></a>

```typescript
public readonly ordsUri: string;
```

- *Type:* string

---

##### `sqlDevWebUri`<sup>Required</sup> <a name="sqlDevWebUri" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.sqlDevWebUri"></a>

```typescript
public readonly sqlDevWebUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseAutonomousDatabasePropertiesConnectionUrls;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrls">OracleDatabaseAutonomousDatabasePropertiesConnectionUrls</a>

---


### OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList <a name="OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get"></a>

```typescript
public get(index: number): OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts">OracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleDatabaseAutonomousDatabasePropertiesCustomerContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts">OracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>[]

---


### OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts">OracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleDatabaseAutonomousDatabasePropertiesCustomerContacts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts">OracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>

---


### OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList <a name="OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get"></a>

```typescript
public get(index: number): OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.dataGuardRoleChangedTime">dataGuardRoleChangedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.disasterRecoveryRoleChangedTime">disasterRecoveryRoleChangedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lagTimeDuration">lagTimeDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb">OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataGuardRoleChangedTime`<sup>Required</sup> <a name="dataGuardRoleChangedTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.dataGuardRoleChangedTime"></a>

```typescript
public readonly dataGuardRoleChangedTime: string;
```

- *Type:* string

---

##### `disasterRecoveryRoleChangedTime`<sup>Required</sup> <a name="disasterRecoveryRoleChangedTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.disasterRecoveryRoleChangedTime"></a>

```typescript
public readonly disasterRecoveryRoleChangedTime: string;
```

- *Type:* string

---

##### `lagTimeDuration`<sup>Required</sup> <a name="lagTimeDuration" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lagTimeDuration"></a>

```typescript
public readonly lagTimeDuration: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb">OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb</a>

---


### OracleDatabaseAutonomousDatabasePropertiesOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.putCustomerContacts">putCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetBackupRetentionPeriodDays">resetBackupRetentionPeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetCharacterSet">resetCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetCustomerContacts">resetCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDataStorageSizeGb">resetDataStorageSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDataStorageSizeTb">resetDataStorageSizeTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDbEdition">resetDbEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDbVersion">resetDbVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetIsAutoScalingEnabled">resetIsAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetIsStorageAutoScalingEnabled">resetIsStorageAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetMaintenanceScheduleType">resetMaintenanceScheduleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetMtlsConnectionRequired">resetMtlsConnectionRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetNCharacterSet">resetNCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetOperationsInsightsState">resetOperationsInsightsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetPrivateEndpointIp">resetPrivateEndpointIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetPrivateEndpointLabel">resetPrivateEndpointLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerContacts` <a name="putCustomerContacts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.putCustomerContacts"></a>

```typescript
public putCustomerContacts(value: IResolvable | OracleDatabaseAutonomousDatabasePropertiesCustomerContacts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.putCustomerContacts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts">OracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>[]

---

##### `resetBackupRetentionPeriodDays` <a name="resetBackupRetentionPeriodDays" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetBackupRetentionPeriodDays"></a>

```typescript
public resetBackupRetentionPeriodDays(): void
```

##### `resetCharacterSet` <a name="resetCharacterSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetCharacterSet"></a>

```typescript
public resetCharacterSet(): void
```

##### `resetComputeCount` <a name="resetComputeCount" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetComputeCount"></a>

```typescript
public resetComputeCount(): void
```

##### `resetCustomerContacts` <a name="resetCustomerContacts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetCustomerContacts"></a>

```typescript
public resetCustomerContacts(): void
```

##### `resetDataStorageSizeGb` <a name="resetDataStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDataStorageSizeGb"></a>

```typescript
public resetDataStorageSizeGb(): void
```

##### `resetDataStorageSizeTb` <a name="resetDataStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDataStorageSizeTb"></a>

```typescript
public resetDataStorageSizeTb(): void
```

##### `resetDbEdition` <a name="resetDbEdition" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDbEdition"></a>

```typescript
public resetDbEdition(): void
```

##### `resetDbVersion` <a name="resetDbVersion" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDbVersion"></a>

```typescript
public resetDbVersion(): void
```

##### `resetIsAutoScalingEnabled` <a name="resetIsAutoScalingEnabled" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetIsAutoScalingEnabled"></a>

```typescript
public resetIsAutoScalingEnabled(): void
```

##### `resetIsStorageAutoScalingEnabled` <a name="resetIsStorageAutoScalingEnabled" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetIsStorageAutoScalingEnabled"></a>

```typescript
public resetIsStorageAutoScalingEnabled(): void
```

##### `resetMaintenanceScheduleType` <a name="resetMaintenanceScheduleType" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetMaintenanceScheduleType"></a>

```typescript
public resetMaintenanceScheduleType(): void
```

##### `resetMtlsConnectionRequired` <a name="resetMtlsConnectionRequired" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetMtlsConnectionRequired"></a>

```typescript
public resetMtlsConnectionRequired(): void
```

##### `resetNCharacterSet` <a name="resetNCharacterSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetNCharacterSet"></a>

```typescript
public resetNCharacterSet(): void
```

##### `resetOperationsInsightsState` <a name="resetOperationsInsightsState" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetOperationsInsightsState"></a>

```typescript
public resetOperationsInsightsState(): void
```

##### `resetPrivateEndpointIp` <a name="resetPrivateEndpointIp" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetPrivateEndpointIp"></a>

```typescript
public resetPrivateEndpointIp(): void
```

##### `resetPrivateEndpointLabel` <a name="resetPrivateEndpointLabel" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetPrivateEndpointLabel"></a>

```typescript
public resetPrivateEndpointLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.actualUsedDataStorageSizeTb">actualUsedDataStorageSizeTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.allocatedStorageSizeTb">allocatedStorageSizeTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.apexDetails">apexDetails</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList">OracleDatabaseAutonomousDatabasePropertiesApexDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.arePrimaryAllowlistedIpsUsed">arePrimaryAllowlistedIpsUsed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.availableUpgradeVersions">availableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionStrings">connectionStrings</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionUrls">connectionUrls</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList">OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContacts">customerContacts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList">OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.databaseManagementState">databaseManagementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataSafeState">dataSafeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.failedDataRecoveryDuration">failedDataRecoveryDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isLocalDataGuardEnabled">isLocalDataGuardEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit">localAdgAutoFailoverMaxDataLossLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localDisasterRecoveryType">localDisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localStandbyDb">localStandbyDb</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList">OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceBeginTime">maintenanceBeginTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceEndTime">maintenanceEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryPerOracleComputeUnitGbs">memoryPerOracleComputeUnitGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryTableGbs">memoryTableGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nextLongTermBackupTime">nextLongTermBackupTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.openMode">openMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.peerDbIds">peerDbIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.permissionLevel">permissionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableMode">refreshableMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableState">refreshableState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.scheduledOperationDetails">scheduledOperationDetails</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.sqlWebDeveloperUrl">sqlWebDeveloperUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.supportedCloneRegions">supportedCloneRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.totalAutoBackupStorageSizeGbs">totalAutoBackupStorageSizeGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.usedDataStorageSizeTbs">usedDataStorageSizeTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDaysInput">backupRetentionPeriodDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSetInput">characterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCountInput">computeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContactsInput">customerContactsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts">OracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGbInput">dataStorageSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTbInput">dataStorageSizeTbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEditionInput">dbEditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersionInput">dbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkloadInput">dbWorkloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabledInput">isAutoScalingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabledInput">isStorageAutoScalingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseTypeInput">licenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleTypeInput">maintenanceScheduleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequiredInput">mtlsConnectionRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSetInput">nCharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsStateInput">operationsInsightsStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIpInput">privateEndpointIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabelInput">privateEndpointLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDays">backupRetentionPeriodDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSet">characterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGb">dataStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTb">dataStorageSizeTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEdition">dbEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkload">dbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabled">isStorageAutoScalingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleType">maintenanceScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSet">nCharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsState">operationsInsightsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties">OracleDatabaseAutonomousDatabaseProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actualUsedDataStorageSizeTb`<sup>Required</sup> <a name="actualUsedDataStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.actualUsedDataStorageSizeTb"></a>

```typescript
public readonly actualUsedDataStorageSizeTb: number;
```

- *Type:* number

---

##### `allocatedStorageSizeTb`<sup>Required</sup> <a name="allocatedStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.allocatedStorageSizeTb"></a>

```typescript
public readonly allocatedStorageSizeTb: number;
```

- *Type:* number

---

##### `apexDetails`<sup>Required</sup> <a name="apexDetails" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.apexDetails"></a>

```typescript
public readonly apexDetails: OracleDatabaseAutonomousDatabasePropertiesApexDetailsList;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList">OracleDatabaseAutonomousDatabasePropertiesApexDetailsList</a>

---

##### `arePrimaryAllowlistedIpsUsed`<sup>Required</sup> <a name="arePrimaryAllowlistedIpsUsed" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.arePrimaryAllowlistedIpsUsed"></a>

```typescript
public readonly arePrimaryAllowlistedIpsUsed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.autonomousContainerDatabaseId"></a>

```typescript
public readonly autonomousContainerDatabaseId: string;
```

- *Type:* string

---

##### `availableUpgradeVersions`<sup>Required</sup> <a name="availableUpgradeVersions" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.availableUpgradeVersions"></a>

```typescript
public readonly availableUpgradeVersions: string[];
```

- *Type:* string[]

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList</a>

---

##### `connectionUrls`<sup>Required</sup> <a name="connectionUrls" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionUrls"></a>

```typescript
public readonly connectionUrls: OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList">OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList</a>

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContacts"></a>

```typescript
public readonly customerContacts: OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList">OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList</a>

---

##### `databaseManagementState`<sup>Required</sup> <a name="databaseManagementState" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.databaseManagementState"></a>

```typescript
public readonly databaseManagementState: string;
```

- *Type:* string

---

##### `dataSafeState`<sup>Required</sup> <a name="dataSafeState" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataSafeState"></a>

```typescript
public readonly dataSafeState: string;
```

- *Type:* string

---

##### `failedDataRecoveryDuration`<sup>Required</sup> <a name="failedDataRecoveryDuration" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.failedDataRecoveryDuration"></a>

```typescript
public readonly failedDataRecoveryDuration: string;
```

- *Type:* string

---

##### `isLocalDataGuardEnabled`<sup>Required</sup> <a name="isLocalDataGuardEnabled" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isLocalDataGuardEnabled"></a>

```typescript
public readonly isLocalDataGuardEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `localAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="localAdgAutoFailoverMaxDataLossLimit" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```typescript
public readonly localAdgAutoFailoverMaxDataLossLimit: number;
```

- *Type:* number

---

##### `localDisasterRecoveryType`<sup>Required</sup> <a name="localDisasterRecoveryType" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localDisasterRecoveryType"></a>

```typescript
public readonly localDisasterRecoveryType: string;
```

- *Type:* string

---

##### `localStandbyDb`<sup>Required</sup> <a name="localStandbyDb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localStandbyDb"></a>

```typescript
public readonly localStandbyDb: OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList">OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList</a>

---

##### `maintenanceBeginTime`<sup>Required</sup> <a name="maintenanceBeginTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceBeginTime"></a>

```typescript
public readonly maintenanceBeginTime: string;
```

- *Type:* string

---

##### `maintenanceEndTime`<sup>Required</sup> <a name="maintenanceEndTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceEndTime"></a>

```typescript
public readonly maintenanceEndTime: string;
```

- *Type:* string

---

##### `memoryPerOracleComputeUnitGbs`<sup>Required</sup> <a name="memoryPerOracleComputeUnitGbs" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryPerOracleComputeUnitGbs"></a>

```typescript
public readonly memoryPerOracleComputeUnitGbs: number;
```

- *Type:* number

---

##### `memoryTableGbs`<sup>Required</sup> <a name="memoryTableGbs" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryTableGbs"></a>

```typescript
public readonly memoryTableGbs: number;
```

- *Type:* number

---

##### `nextLongTermBackupTime`<sup>Required</sup> <a name="nextLongTermBackupTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nextLongTermBackupTime"></a>

```typescript
public readonly nextLongTermBackupTime: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

---

##### `peerDbIds`<sup>Required</sup> <a name="peerDbIds" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.peerDbIds"></a>

```typescript
public readonly peerDbIds: string[];
```

- *Type:* string[]

---

##### `permissionLevel`<sup>Required</sup> <a name="permissionLevel" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.permissionLevel"></a>

```typescript
public readonly permissionLevel: string;
```

- *Type:* string

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: string;
```

- *Type:* string

---

##### `refreshableMode`<sup>Required</sup> <a name="refreshableMode" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableMode"></a>

```typescript
public readonly refreshableMode: string;
```

- *Type:* string

---

##### `refreshableState`<sup>Required</sup> <a name="refreshableState" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableState"></a>

```typescript
public readonly refreshableState: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `scheduledOperationDetails`<sup>Required</sup> <a name="scheduledOperationDetails" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.scheduledOperationDetails"></a>

```typescript
public readonly scheduledOperationDetails: OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList</a>

---

##### `sqlWebDeveloperUrl`<sup>Required</sup> <a name="sqlWebDeveloperUrl" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.sqlWebDeveloperUrl"></a>

```typescript
public readonly sqlWebDeveloperUrl: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `supportedCloneRegions`<sup>Required</sup> <a name="supportedCloneRegions" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.supportedCloneRegions"></a>

```typescript
public readonly supportedCloneRegions: string[];
```

- *Type:* string[]

---

##### `totalAutoBackupStorageSizeGbs`<sup>Required</sup> <a name="totalAutoBackupStorageSizeGbs" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.totalAutoBackupStorageSizeGbs"></a>

```typescript
public readonly totalAutoBackupStorageSizeGbs: number;
```

- *Type:* number

---

##### `usedDataStorageSizeTbs`<sup>Required</sup> <a name="usedDataStorageSizeTbs" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.usedDataStorageSizeTbs"></a>

```typescript
public readonly usedDataStorageSizeTbs: number;
```

- *Type:* number

---

##### `backupRetentionPeriodDaysInput`<sup>Optional</sup> <a name="backupRetentionPeriodDaysInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDaysInput"></a>

```typescript
public readonly backupRetentionPeriodDaysInput: number;
```

- *Type:* number

---

##### `characterSetInput`<sup>Optional</sup> <a name="characterSetInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSetInput"></a>

```typescript
public readonly characterSetInput: string;
```

- *Type:* string

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCountInput"></a>

```typescript
public readonly computeCountInput: number;
```

- *Type:* number

---

##### `customerContactsInput`<sup>Optional</sup> <a name="customerContactsInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContactsInput"></a>

```typescript
public readonly customerContactsInput: IResolvable | OracleDatabaseAutonomousDatabasePropertiesCustomerContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts">OracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>[]

---

##### `dataStorageSizeGbInput`<sup>Optional</sup> <a name="dataStorageSizeGbInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGbInput"></a>

```typescript
public readonly dataStorageSizeGbInput: number;
```

- *Type:* number

---

##### `dataStorageSizeTbInput`<sup>Optional</sup> <a name="dataStorageSizeTbInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTbInput"></a>

```typescript
public readonly dataStorageSizeTbInput: number;
```

- *Type:* number

---

##### `dbEditionInput`<sup>Optional</sup> <a name="dbEditionInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEditionInput"></a>

```typescript
public readonly dbEditionInput: string;
```

- *Type:* string

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersionInput"></a>

```typescript
public readonly dbVersionInput: string;
```

- *Type:* string

---

##### `dbWorkloadInput`<sup>Optional</sup> <a name="dbWorkloadInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkloadInput"></a>

```typescript
public readonly dbWorkloadInput: string;
```

- *Type:* string

---

##### `isAutoScalingEnabledInput`<sup>Optional</sup> <a name="isAutoScalingEnabledInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabledInput"></a>

```typescript
public readonly isAutoScalingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isStorageAutoScalingEnabledInput`<sup>Optional</sup> <a name="isStorageAutoScalingEnabledInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabledInput"></a>

```typescript
public readonly isStorageAutoScalingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseTypeInput"></a>

```typescript
public readonly licenseTypeInput: string;
```

- *Type:* string

---

##### `maintenanceScheduleTypeInput`<sup>Optional</sup> <a name="maintenanceScheduleTypeInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleTypeInput"></a>

```typescript
public readonly maintenanceScheduleTypeInput: string;
```

- *Type:* string

---

##### `mtlsConnectionRequiredInput`<sup>Optional</sup> <a name="mtlsConnectionRequiredInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequiredInput"></a>

```typescript
public readonly mtlsConnectionRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nCharacterSetInput`<sup>Optional</sup> <a name="nCharacterSetInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSetInput"></a>

```typescript
public readonly nCharacterSetInput: string;
```

- *Type:* string

---

##### `operationsInsightsStateInput`<sup>Optional</sup> <a name="operationsInsightsStateInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsStateInput"></a>

```typescript
public readonly operationsInsightsStateInput: string;
```

- *Type:* string

---

##### `privateEndpointIpInput`<sup>Optional</sup> <a name="privateEndpointIpInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIpInput"></a>

```typescript
public readonly privateEndpointIpInput: string;
```

- *Type:* string

---

##### `privateEndpointLabelInput`<sup>Optional</sup> <a name="privateEndpointLabelInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabelInput"></a>

```typescript
public readonly privateEndpointLabelInput: string;
```

- *Type:* string

---

##### `backupRetentionPeriodDays`<sup>Required</sup> <a name="backupRetentionPeriodDays" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDays"></a>

```typescript
public readonly backupRetentionPeriodDays: number;
```

- *Type:* number

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `dataStorageSizeGb`<sup>Required</sup> <a name="dataStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGb"></a>

```typescript
public readonly dataStorageSizeGb: number;
```

- *Type:* number

---

##### `dataStorageSizeTb`<sup>Required</sup> <a name="dataStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTb"></a>

```typescript
public readonly dataStorageSizeTb: number;
```

- *Type:* number

---

##### `dbEdition`<sup>Required</sup> <a name="dbEdition" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEdition"></a>

```typescript
public readonly dbEdition: string;
```

- *Type:* string

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkload"></a>

```typescript
public readonly dbWorkload: string;
```

- *Type:* string

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabled"></a>

```typescript
public readonly isAutoScalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isStorageAutoScalingEnabled`<sup>Required</sup> <a name="isStorageAutoScalingEnabled" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabled"></a>

```typescript
public readonly isStorageAutoScalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `maintenanceScheduleType`<sup>Required</sup> <a name="maintenanceScheduleType" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleType"></a>

```typescript
public readonly maintenanceScheduleType: string;
```

- *Type:* string

---

##### `mtlsConnectionRequired`<sup>Required</sup> <a name="mtlsConnectionRequired" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequired"></a>

```typescript
public readonly mtlsConnectionRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nCharacterSet`<sup>Required</sup> <a name="nCharacterSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSet"></a>

```typescript
public readonly nCharacterSet: string;
```

- *Type:* string

---

##### `operationsInsightsState`<sup>Required</sup> <a name="operationsInsightsState" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsState"></a>

```typescript
public readonly operationsInsightsState: string;
```

- *Type:* string

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

---

##### `privateEndpointLabel`<sup>Required</sup> <a name="privateEndpointLabel" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabel"></a>

```typescript
public readonly privateEndpointLabel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseAutonomousDatabaseProperties;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties">OracleDatabaseAutonomousDatabaseProperties</a>

---


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get"></a>

```typescript
public get(index: number): OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.stopTime">stopTime</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList</a>

---

##### `stopTime`<sup>Required</sup> <a name="stopTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.stopTime"></a>

```typescript
public readonly stopTime: OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails</a>

---


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get"></a>

```typescript
public get(index: number): OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime</a>

---


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get"></a>

```typescript
public get(index: number): OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime</a>

---


### OracleDatabaseAutonomousDatabaseTimeoutsOutputReference <a name="OracleDatabaseAutonomousDatabaseTimeoutsOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseAutonomousDatabase } from '@cdktf/provider-google'

new oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts">OracleDatabaseAutonomousDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleDatabaseAutonomousDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts">OracleDatabaseAutonomousDatabaseTimeouts</a>

---



