# `databaseMigrationServicePrivateConnection` Submodule <a name="`databaseMigrationServicePrivateConnection` Submodule" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMigrationServicePrivateConnection <a name="DatabaseMigrationServicePrivateConnection" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection google_database_migration_service_private_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer"></a>

```typescript
import { databaseMigrationServicePrivateConnection } from '@cdktf/provider-google'

new databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection(scope: Construct, id: string, config: DatabaseMigrationServicePrivateConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig">DatabaseMigrationServicePrivateConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig">DatabaseMigrationServicePrivateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putVpcPeeringConfig">putVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseMigrationServicePrivateConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts">DatabaseMigrationServicePrivateConnectionTimeouts</a>

---

##### `putVpcPeeringConfig` <a name="putVpcPeeringConfig" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putVpcPeeringConfig"></a>

```typescript
public putVpcPeeringConfig(value: DatabaseMigrationServicePrivateConnectionVpcPeeringConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putVpcPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMigrationServicePrivateConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isConstruct"></a>

```typescript
import { databaseMigrationServicePrivateConnection } from '@cdktf/provider-google'

databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformElement"></a>

```typescript
import { databaseMigrationServicePrivateConnection } from '@cdktf/provider-google'

databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformResource"></a>

```typescript
import { databaseMigrationServicePrivateConnection } from '@cdktf/provider-google'

databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport"></a>

```typescript
import { databaseMigrationServicePrivateConnection } from '@cdktf/provider-google'

databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseMigrationServicePrivateConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseMigrationServicePrivateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseMigrationServicePrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMigrationServicePrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.error">error</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList">DatabaseMigrationServicePrivateConnectionErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference">DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.vpcPeeringConfig">vpcPeeringConfig</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference">DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.privateConnectionIdInput">privateConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts">DatabaseMigrationServicePrivateConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.vpcPeeringConfigInput">vpcPeeringConfigInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.privateConnectionId">privateConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.error"></a>

```typescript
public readonly error: DatabaseMigrationServicePrivateConnectionErrorList;
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList">DatabaseMigrationServicePrivateConnectionErrorList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference">DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference</a>

---

##### `vpcPeeringConfig`<sup>Required</sup> <a name="vpcPeeringConfig" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.vpcPeeringConfig"></a>

```typescript
public readonly vpcPeeringConfig: DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference">DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `privateConnectionIdInput`<sup>Optional</sup> <a name="privateConnectionIdInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.privateConnectionIdInput"></a>

```typescript
public readonly privateConnectionIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseMigrationServicePrivateConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts">DatabaseMigrationServicePrivateConnectionTimeouts</a>

---

##### `vpcPeeringConfigInput`<sup>Optional</sup> <a name="vpcPeeringConfigInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.vpcPeeringConfigInput"></a>

```typescript
public readonly vpcPeeringConfigInput: DatabaseMigrationServicePrivateConnectionVpcPeeringConfig;
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `privateConnectionId`<sup>Required</sup> <a name="privateConnectionId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.privateConnectionId"></a>

```typescript
public readonly privateConnectionId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMigrationServicePrivateConnectionConfig <a name="DatabaseMigrationServicePrivateConnectionConfig" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.Initializer"></a>

```typescript
import { databaseMigrationServicePrivateConnection } from '@cdktf/provider-google'

const databaseMigrationServicePrivateConnectionConfig: databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.location">location</a></code> | <code>string</code> | The name of the location this private connection is located in. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.privateConnectionId">privateConnectionId</a></code> | <code>string</code> | The private connectivity identifier. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.vpcPeeringConfig">vpcPeeringConfig</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | vpc_peering_config block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#id DatabaseMigrationServicePrivateConnection#id}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#project DatabaseMigrationServicePrivateConnection#project}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts">DatabaseMigrationServicePrivateConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this private connection is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#location DatabaseMigrationServicePrivateConnection#location}

---

##### `privateConnectionId`<sup>Required</sup> <a name="privateConnectionId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.privateConnectionId"></a>

```typescript
public readonly privateConnectionId: string;
```

- *Type:* string

The private connectivity identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#private_connection_id DatabaseMigrationServicePrivateConnection#private_connection_id}

---

##### `vpcPeeringConfig`<sup>Required</sup> <a name="vpcPeeringConfig" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.vpcPeeringConfig"></a>

```typescript
public readonly vpcPeeringConfig: DatabaseMigrationServicePrivateConnectionVpcPeeringConfig;
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

vpc_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#vpc_peering_config DatabaseMigrationServicePrivateConnection#vpc_peering_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#display_name DatabaseMigrationServicePrivateConnection#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#id DatabaseMigrationServicePrivateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#labels DatabaseMigrationServicePrivateConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#project DatabaseMigrationServicePrivateConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseMigrationServicePrivateConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts">DatabaseMigrationServicePrivateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#timeouts DatabaseMigrationServicePrivateConnection#timeouts}

---

### DatabaseMigrationServicePrivateConnectionError <a name="DatabaseMigrationServicePrivateConnectionError" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionError.Initializer"></a>

```typescript
import { databaseMigrationServicePrivateConnection } from '@cdktf/provider-google'

const databaseMigrationServicePrivateConnectionError: databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionError = { ... }
```


### DatabaseMigrationServicePrivateConnectionTimeouts <a name="DatabaseMigrationServicePrivateConnectionTimeouts" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.Initializer"></a>

```typescript
import { databaseMigrationServicePrivateConnection } from '@cdktf/provider-google'

const databaseMigrationServicePrivateConnectionTimeouts: databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#create DatabaseMigrationServicePrivateConnection#create}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#delete DatabaseMigrationServicePrivateConnection#delete}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#update DatabaseMigrationServicePrivateConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#create DatabaseMigrationServicePrivateConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#delete DatabaseMigrationServicePrivateConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#update DatabaseMigrationServicePrivateConnection#update}.

---

### DatabaseMigrationServicePrivateConnectionVpcPeeringConfig <a name="DatabaseMigrationServicePrivateConnectionVpcPeeringConfig" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig.Initializer"></a>

```typescript
import { databaseMigrationServicePrivateConnection } from '@cdktf/provider-google'

const databaseMigrationServicePrivateConnectionVpcPeeringConfig: databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.subnet">subnet</a></code> | <code>string</code> | A free subnet for peering. (CIDR of /29). |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.vpcName">vpcName</a></code> | <code>string</code> | Fully qualified name of the VPC that Database Migration Service will peer to. Format: projects/{project}/global/{networks}/{name}. |

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

A free subnet for peering. (CIDR of /29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#subnet DatabaseMigrationServicePrivateConnection#subnet}

---

##### `vpcName`<sup>Required</sup> <a name="vpcName" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string

Fully qualified name of the VPC that Database Migration Service will peer to. Format: projects/{project}/global/{networks}/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/database_migration_service_private_connection#vpc_name DatabaseMigrationServicePrivateConnection#vpc_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMigrationServicePrivateConnectionErrorList <a name="DatabaseMigrationServicePrivateConnectionErrorList" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer"></a>

```typescript
import { databaseMigrationServicePrivateConnection } from '@cdktf/provider-google'

new databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.get"></a>

```typescript
public get(index: number): DatabaseMigrationServicePrivateConnectionErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseMigrationServicePrivateConnectionErrorOutputReference <a name="DatabaseMigrationServicePrivateConnectionErrorOutputReference" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer"></a>

```typescript
import { databaseMigrationServicePrivateConnection } from '@cdktf/provider-google'

new databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.details">details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionError">DatabaseMigrationServicePrivateConnectionError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.details"></a>

```typescript
public readonly details: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationServicePrivateConnectionError;
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionError">DatabaseMigrationServicePrivateConnectionError</a>

---


### DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference <a name="DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseMigrationServicePrivateConnection } from '@cdktf/provider-google'

new databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts">DatabaseMigrationServicePrivateConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseMigrationServicePrivateConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts">DatabaseMigrationServicePrivateConnectionTimeouts</a>

---


### DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference <a name="DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer"></a>

```typescript
import { databaseMigrationServicePrivateConnection } from '@cdktf/provider-google'

new databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput">subnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcNameInput">vpcNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcName">vpcName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput"></a>

```typescript
public readonly subnetInput: string;
```

- *Type:* string

---

##### `vpcNameInput`<sup>Optional</sup> <a name="vpcNameInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcNameInput"></a>

```typescript
public readonly vpcNameInput: string;
```

- *Type:* string

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

##### `vpcName`<sup>Required</sup> <a name="vpcName" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMigrationServicePrivateConnectionVpcPeeringConfig;
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---



