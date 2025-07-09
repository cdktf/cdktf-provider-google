# `oracleDatabaseCloudVmCluster` Submodule <a name="`oracleDatabaseCloudVmCluster` Submodule" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseCloudVmCluster <a name="OracleDatabaseCloudVmCluster" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster google_oracle_database_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer"></a>

```typescript
import { oracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

new oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster(scope: Construct, id: string, config: OracleDatabaseCloudVmClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig">OracleDatabaseCloudVmClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig">OracleDatabaseCloudVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties"></a>

```typescript
public putProperties(value: OracleDatabaseCloudVmClusterProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: OracleDatabaseCloudVmClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a>

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OracleDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isConstruct"></a>

```typescript
import { oracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformElement"></a>

```typescript
import { oracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformResource"></a>

```typescript
import { oracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport"></a>

```typescript
import { oracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OracleDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleDatabaseCloudVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleDatabaseCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OracleDatabaseCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.gcpOracleZone">gcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference">OracleDatabaseCloudVmClusterPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference">OracleDatabaseCloudVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupSubnetCidrInput">backupSubnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cloudVmClusterIdInput">cloudVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.exadataInfrastructureInput">exadataInfrastructureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupSubnetCidr">backupSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.exadataInfrastructure">exadataInfrastructure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.gcpOracleZone"></a>

```typescript
public readonly gcpOracleZone: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.properties"></a>

```typescript
public readonly properties: OracleDatabaseCloudVmClusterPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference">OracleDatabaseCloudVmClusterPropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseCloudVmClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference">OracleDatabaseCloudVmClusterTimeoutsOutputReference</a>

---

##### `backupSubnetCidrInput`<sup>Optional</sup> <a name="backupSubnetCidrInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupSubnetCidrInput"></a>

```typescript
public readonly backupSubnetCidrInput: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `cloudVmClusterIdInput`<sup>Optional</sup> <a name="cloudVmClusterIdInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cloudVmClusterIdInput"></a>

```typescript
public readonly cloudVmClusterIdInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `exadataInfrastructureInput`<sup>Optional</sup> <a name="exadataInfrastructureInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.exadataInfrastructureInput"></a>

```typescript
public readonly exadataInfrastructureInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: OracleDatabaseCloudVmClusterProperties;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OracleDatabaseCloudVmClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a>

---

##### `backupSubnetCidr`<sup>Required</sup> <a name="backupSubnetCidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupSubnetCidr"></a>

```typescript
public readonly backupSubnetCidr: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cloudVmClusterId"></a>

```typescript
public readonly cloudVmClusterId: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `exadataInfrastructure`<sup>Required</sup> <a name="exadataInfrastructure" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.exadataInfrastructure"></a>

```typescript
public readonly exadataInfrastructure: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseCloudVmClusterConfig <a name="OracleDatabaseCloudVmClusterConfig" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.Initializer"></a>

```typescript
import { oracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

const oracleDatabaseCloudVmClusterConfig: oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.backupSubnetCidr">backupSubnetCidr</a></code> | <code>string</code> | CIDR range of the backup subnet. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.cidr">cidr</a></code> | <code>string</code> | Network settings. CIDR to use for cluster IP allocation. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>string</code> | The ID of the VM Cluster to create. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.exadataInfrastructure">exadataInfrastructure</a></code> | <code>string</code> | The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.network">network</a></code> | <code>string</code> | The name of the VPC network. Format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Terraform will be prevented from destroying the cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.displayName">displayName</a></code> | <code>string</code> | User friendly name for this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#id OracleDatabaseCloudVmCluster#id}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels or tags associated with the VM Cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#project OracleDatabaseCloudVmCluster#project}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupSubnetCidr`<sup>Required</sup> <a name="backupSubnetCidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.backupSubnetCidr"></a>

```typescript
public readonly backupSubnetCidr: string;
```

- *Type:* string

CIDR range of the backup subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#backup_subnet_cidr OracleDatabaseCloudVmCluster#backup_subnet_cidr}

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Network settings. CIDR to use for cluster IP allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#cidr OracleDatabaseCloudVmCluster#cidr}

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.cloudVmClusterId"></a>

```typescript
public readonly cloudVmClusterId: string;
```

- *Type:* string

The ID of the VM Cluster to create.

This value is restricted
to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#cloud_vm_cluster_id OracleDatabaseCloudVmCluster#cloud_vm_cluster_id}

---

##### `exadataInfrastructure`<sup>Required</sup> <a name="exadataInfrastructure" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.exadataInfrastructure"></a>

```typescript
public readonly exadataInfrastructure: string;
```

- *Type:* string

The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#exadata_infrastructure OracleDatabaseCloudVmCluster#exadata_infrastructure}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#location OracleDatabaseCloudVmCluster#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name of the VPC network. Format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#network OracleDatabaseCloudVmCluster#network}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Terraform will be prevented from destroying the cluster.

Deleting this cluster via terraform destroy or terraform apply will only succeed if this field is false in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#deletion_protection OracleDatabaseCloudVmCluster#deletion_protection}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User friendly name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#display_name OracleDatabaseCloudVmCluster#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#id OracleDatabaseCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels or tags associated with the VM Cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#labels OracleDatabaseCloudVmCluster#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#project OracleDatabaseCloudVmCluster#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.properties"></a>

```typescript
public readonly properties: OracleDatabaseCloudVmClusterProperties;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#properties OracleDatabaseCloudVmCluster#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseCloudVmClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#timeouts OracleDatabaseCloudVmCluster#timeouts}

---

### OracleDatabaseCloudVmClusterProperties <a name="OracleDatabaseCloudVmClusterProperties" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.Initializer"></a>

```typescript
import { oracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

const oracleDatabaseCloudVmClusterProperties: oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | Number of enabled CPU cores. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.licenseType">licenseType</a></code> | <code>string</code> | License type of VM Cluster.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.clusterName">clusterName</a></code> | <code>string</code> | OCI Cluster name. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dataStorageSizeTb">dataStorageSizeTb</a></code> | <code>number</code> | The data disk group size to be allocated in TBs. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dbNodeStorageSizeGb">dbNodeStorageSizeGb</a></code> | <code>number</code> | Local storage per VM. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dbServerOcids">dbServerOcids</a></code> | <code>string[]</code> | OCID of database servers. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.diagnosticsDataCollectionOptions">diagnosticsDataCollectionOptions</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | diagnostics_data_collection_options block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.diskRedundancy">diskRedundancy</a></code> | <code>string</code> | The type of redundancy.   Possible values:  DISK_REDUNDANCY_UNSPECIFIED HIGH NORMAL. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.giVersion">giVersion</a></code> | <code>string</code> | Grid Infrastructure Version. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.hostnamePrefix">hostnamePrefix</a></code> | <code>string</code> | Prefix for VM cluster host names. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.localBackupEnabled">localBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use local backup. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.memorySizeGb">memorySizeGb</a></code> | <code>number</code> | Memory allocated in GBs. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.nodeCount">nodeCount</a></code> | <code>number</code> | Number of database servers. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.ocpuCount">ocpuCount</a></code> | <code>number</code> | OCPU count per VM. Minimum is 0.1. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.sparseDiskgroupEnabled">sparseDiskgroupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use exadata sparse snapshots. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.sshPublicKeys">sshPublicKeys</a></code> | <code>string[]</code> | SSH public keys to be stored with cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.timeZone">timeZone</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | time_zone block. |

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

Number of enabled CPU cores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#cpu_core_count OracleDatabaseCloudVmCluster#cpu_core_count}

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

License type of VM Cluster.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#license_type OracleDatabaseCloudVmCluster#license_type}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#cluster_name OracleDatabaseCloudVmCluster#cluster_name}

---

##### `dataStorageSizeTb`<sup>Optional</sup> <a name="dataStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dataStorageSizeTb"></a>

```typescript
public readonly dataStorageSizeTb: number;
```

- *Type:* number

The data disk group size to be allocated in TBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#data_storage_size_tb OracleDatabaseCloudVmCluster#data_storage_size_tb}

---

##### `dbNodeStorageSizeGb`<sup>Optional</sup> <a name="dbNodeStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dbNodeStorageSizeGb"></a>

```typescript
public readonly dbNodeStorageSizeGb: number;
```

- *Type:* number

Local storage per VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#db_node_storage_size_gb OracleDatabaseCloudVmCluster#db_node_storage_size_gb}

---

##### `dbServerOcids`<sup>Optional</sup> <a name="dbServerOcids" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dbServerOcids"></a>

```typescript
public readonly dbServerOcids: string[];
```

- *Type:* string[]

OCID of database servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#db_server_ocids OracleDatabaseCloudVmCluster#db_server_ocids}

---

##### `diagnosticsDataCollectionOptions`<sup>Optional</sup> <a name="diagnosticsDataCollectionOptions" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.diagnosticsDataCollectionOptions"></a>

```typescript
public readonly diagnosticsDataCollectionOptions: OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

diagnostics_data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#diagnostics_data_collection_options OracleDatabaseCloudVmCluster#diagnostics_data_collection_options}

---

##### `diskRedundancy`<sup>Optional</sup> <a name="diskRedundancy" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.diskRedundancy"></a>

```typescript
public readonly diskRedundancy: string;
```

- *Type:* string

The type of redundancy.   Possible values:  DISK_REDUNDANCY_UNSPECIFIED HIGH NORMAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#disk_redundancy OracleDatabaseCloudVmCluster#disk_redundancy}

---

##### `giVersion`<sup>Optional</sup> <a name="giVersion" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.giVersion"></a>

```typescript
public readonly giVersion: string;
```

- *Type:* string

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#gi_version OracleDatabaseCloudVmCluster#gi_version}

---

##### `hostnamePrefix`<sup>Optional</sup> <a name="hostnamePrefix" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.hostnamePrefix"></a>

```typescript
public readonly hostnamePrefix: string;
```

- *Type:* string

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#hostname_prefix OracleDatabaseCloudVmCluster#hostname_prefix}

---

##### `localBackupEnabled`<sup>Optional</sup> <a name="localBackupEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.localBackupEnabled"></a>

```typescript
public readonly localBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use local backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#local_backup_enabled OracleDatabaseCloudVmCluster#local_backup_enabled}

---

##### `memorySizeGb`<sup>Optional</sup> <a name="memorySizeGb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.memorySizeGb"></a>

```typescript
public readonly memorySizeGb: number;
```

- *Type:* number

Memory allocated in GBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#memory_size_gb OracleDatabaseCloudVmCluster#memory_size_gb}

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Number of database servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#node_count OracleDatabaseCloudVmCluster#node_count}

---

##### `ocpuCount`<sup>Optional</sup> <a name="ocpuCount" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.ocpuCount"></a>

```typescript
public readonly ocpuCount: number;
```

- *Type:* number

OCPU count per VM. Minimum is 0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#ocpu_count OracleDatabaseCloudVmCluster#ocpu_count}

---

##### `sparseDiskgroupEnabled`<sup>Optional</sup> <a name="sparseDiskgroupEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.sparseDiskgroupEnabled"></a>

```typescript
public readonly sparseDiskgroupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use exadata sparse snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#sparse_diskgroup_enabled OracleDatabaseCloudVmCluster#sparse_diskgroup_enabled}

---

##### `sshPublicKeys`<sup>Optional</sup> <a name="sshPublicKeys" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: string[];
```

- *Type:* string[]

SSH public keys to be stored with cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#ssh_public_keys OracleDatabaseCloudVmCluster#ssh_public_keys}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.timeZone"></a>

```typescript
public readonly timeZone: OracleDatabaseCloudVmClusterPropertiesTimeZone;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#time_zone OracleDatabaseCloudVmCluster#time_zone}

---

### OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions <a name="OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.Initializer"></a>

```typescript
import { oracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

const oracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions: oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.diagnosticsEventsEnabled">diagnosticsEventsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether diagnostic collection is enabled for the VM cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.healthMonitoringEnabled">healthMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether health monitoring is enabled for the VM cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.incidentLogsEnabled">incidentLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether incident logs and trace collection are enabled for the VM cluster. |

---

##### `diagnosticsEventsEnabled`<sup>Optional</sup> <a name="diagnosticsEventsEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.diagnosticsEventsEnabled"></a>

```typescript
public readonly diagnosticsEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether diagnostic collection is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#diagnostics_events_enabled OracleDatabaseCloudVmCluster#diagnostics_events_enabled}

---

##### `healthMonitoringEnabled`<sup>Optional</sup> <a name="healthMonitoringEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.healthMonitoringEnabled"></a>

```typescript
public readonly healthMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether health monitoring is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#health_monitoring_enabled OracleDatabaseCloudVmCluster#health_monitoring_enabled}

---

##### `incidentLogsEnabled`<sup>Optional</sup> <a name="incidentLogsEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.incidentLogsEnabled"></a>

```typescript
public readonly incidentLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether incident logs and trace collection are enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#incident_logs_enabled OracleDatabaseCloudVmCluster#incident_logs_enabled}

---

### OracleDatabaseCloudVmClusterPropertiesTimeZone <a name="OracleDatabaseCloudVmClusterPropertiesTimeZone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone.Initializer"></a>

```typescript
import { oracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

const oracleDatabaseCloudVmClusterPropertiesTimeZone: oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone.property.id">id</a></code> | <code>string</code> | IANA Time Zone Database time zone, e.g. "America/New_York". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

IANA Time Zone Database time zone, e.g. "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#id OracleDatabaseCloudVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OracleDatabaseCloudVmClusterTimeouts <a name="OracleDatabaseCloudVmClusterTimeouts" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.Initializer"></a>

```typescript
import { oracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

const oracleDatabaseCloudVmClusterTimeouts: oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#create OracleDatabaseCloudVmCluster#create}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#delete OracleDatabaseCloudVmCluster#delete}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#update OracleDatabaseCloudVmCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#create OracleDatabaseCloudVmCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#delete OracleDatabaseCloudVmCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/oracle_database_cloud_vm_cluster#update OracleDatabaseCloudVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference <a name="OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

new oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetDiagnosticsEventsEnabled">resetDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetHealthMonitoringEnabled">resetHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetIncidentLogsEnabled">resetIncidentLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiagnosticsEventsEnabled` <a name="resetDiagnosticsEventsEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetDiagnosticsEventsEnabled"></a>

```typescript
public resetDiagnosticsEventsEnabled(): void
```

##### `resetHealthMonitoringEnabled` <a name="resetHealthMonitoringEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetHealthMonitoringEnabled"></a>

```typescript
public resetHealthMonitoringEnabled(): void
```

##### `resetIncidentLogsEnabled` <a name="resetIncidentLogsEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetIncidentLogsEnabled"></a>

```typescript
public resetIncidentLogsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabledInput">diagnosticsEventsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabledInput">healthMonitoringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabledInput">incidentLogsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled">diagnosticsEventsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled">healthMonitoringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled">incidentLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="diagnosticsEventsEnabledInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabledInput"></a>

```typescript
public readonly diagnosticsEventsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthMonitoringEnabledInput`<sup>Optional</sup> <a name="healthMonitoringEnabledInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabledInput"></a>

```typescript
public readonly healthMonitoringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `incidentLogsEnabledInput`<sup>Optional</sup> <a name="incidentLogsEnabledInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabledInput"></a>

```typescript
public readonly incidentLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diagnosticsEventsEnabled`<sup>Required</sup> <a name="diagnosticsEventsEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled"></a>

```typescript
public readonly diagnosticsEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthMonitoringEnabled`<sup>Required</sup> <a name="healthMonitoringEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled"></a>

```typescript
public readonly healthMonitoringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `incidentLogsEnabled`<sup>Required</sup> <a name="incidentLogsEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled"></a>

```typescript
public readonly incidentLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---


### OracleDatabaseCloudVmClusterPropertiesOutputReference <a name="OracleDatabaseCloudVmClusterPropertiesOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

new oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions">putDiagnosticsDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone">putTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDataStorageSizeTb">resetDataStorageSizeTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbNodeStorageSizeGb">resetDbNodeStorageSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbServerOcids">resetDbServerOcids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiagnosticsDataCollectionOptions">resetDiagnosticsDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiskRedundancy">resetDiskRedundancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetGiVersion">resetGiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetHostnamePrefix">resetHostnamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetLocalBackupEnabled">resetLocalBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetMemorySizeGb">resetMemorySizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetOcpuCount">resetOcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetSparseDiskgroupEnabled">resetSparseDiskgroupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetSshPublicKeys">resetSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiagnosticsDataCollectionOptions` <a name="putDiagnosticsDataCollectionOptions" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions"></a>

```typescript
public putDiagnosticsDataCollectionOptions(value: OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---

##### `putTimeZone` <a name="putTimeZone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone"></a>

```typescript
public putTimeZone(value: OracleDatabaseCloudVmClusterPropertiesTimeZone): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---

##### `resetClusterName` <a name="resetClusterName" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetClusterName"></a>

```typescript
public resetClusterName(): void
```

##### `resetDataStorageSizeTb` <a name="resetDataStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDataStorageSizeTb"></a>

```typescript
public resetDataStorageSizeTb(): void
```

##### `resetDbNodeStorageSizeGb` <a name="resetDbNodeStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbNodeStorageSizeGb"></a>

```typescript
public resetDbNodeStorageSizeGb(): void
```

##### `resetDbServerOcids` <a name="resetDbServerOcids" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbServerOcids"></a>

```typescript
public resetDbServerOcids(): void
```

##### `resetDiagnosticsDataCollectionOptions` <a name="resetDiagnosticsDataCollectionOptions" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiagnosticsDataCollectionOptions"></a>

```typescript
public resetDiagnosticsDataCollectionOptions(): void
```

##### `resetDiskRedundancy` <a name="resetDiskRedundancy" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiskRedundancy"></a>

```typescript
public resetDiskRedundancy(): void
```

##### `resetGiVersion` <a name="resetGiVersion" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetGiVersion"></a>

```typescript
public resetGiVersion(): void
```

##### `resetHostnamePrefix` <a name="resetHostnamePrefix" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetHostnamePrefix"></a>

```typescript
public resetHostnamePrefix(): void
```

##### `resetLocalBackupEnabled` <a name="resetLocalBackupEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetLocalBackupEnabled"></a>

```typescript
public resetLocalBackupEnabled(): void
```

##### `resetMemorySizeGb` <a name="resetMemorySizeGb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetMemorySizeGb"></a>

```typescript
public resetMemorySizeGb(): void
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```

##### `resetOcpuCount` <a name="resetOcpuCount" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetOcpuCount"></a>

```typescript
public resetOcpuCount(): void
```

##### `resetSparseDiskgroupEnabled` <a name="resetSparseDiskgroupEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetSparseDiskgroupEnabled"></a>

```typescript
public resetSparseDiskgroupEnabled(): void
```

##### `resetSshPublicKeys` <a name="resetSshPublicKeys" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetSshPublicKeys"></a>

```typescript
public resetSshPublicKeys(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptions">diagnosticsDataCollectionOptions</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dnsListenerIp">dnsListenerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDns">scanDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDnsRecordId">scanDnsRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanIpIds">scanIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcpSsl">scanListenerPortTcpSsl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.storageSizeGb">storageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.systemVersion">systemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZone">timeZone</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference">OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTbInput">dataStorageSizeTbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGbInput">dbNodeStorageSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcidsInput">dbServerOcidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptionsInput">diagnosticsDataCollectionOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancyInput">diskRedundancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersionInput">giVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefixInput">hostnamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseTypeInput">licenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabledInput">localBackupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGbInput">memorySizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCountInput">ocpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabledInput">sparseDiskgroupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTb">dataStorageSizeTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGb">dbNodeStorageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcids">dbServerOcids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancy">diskRedundancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersion">giVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefix">hostnamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabled">localBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGb">memorySizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCount">ocpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabled">sparseDiskgroupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeys">sshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `diagnosticsDataCollectionOptions`<sup>Required</sup> <a name="diagnosticsDataCollectionOptions" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptions"></a>

```typescript
public readonly diagnosticsDataCollectionOptions: OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference</a>

---

##### `dnsListenerIp`<sup>Required</sup> <a name="dnsListenerIp" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dnsListenerIp"></a>

```typescript
public readonly dnsListenerIp: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `scanDns`<sup>Required</sup> <a name="scanDns" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDns"></a>

```typescript
public readonly scanDns: string;
```

- *Type:* string

---

##### `scanDnsRecordId`<sup>Required</sup> <a name="scanDnsRecordId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDnsRecordId"></a>

```typescript
public readonly scanDnsRecordId: string;
```

- *Type:* string

---

##### `scanIpIds`<sup>Required</sup> <a name="scanIpIds" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanIpIds"></a>

```typescript
public readonly scanIpIds: string[];
```

- *Type:* string[]

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcp"></a>

```typescript
public readonly scanListenerPortTcp: number;
```

- *Type:* number

---

##### `scanListenerPortTcpSsl`<sup>Required</sup> <a name="scanListenerPortTcpSsl" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcpSsl"></a>

```typescript
public readonly scanListenerPortTcpSsl: number;
```

- *Type:* number

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageSizeGb`<sup>Required</sup> <a name="storageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.storageSizeGb"></a>

```typescript
public readonly storageSizeGb: number;
```

- *Type:* number

---

##### `systemVersion`<sup>Required</sup> <a name="systemVersion" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.systemVersion"></a>

```typescript
public readonly systemVersion: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference">OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCountInput"></a>

```typescript
public readonly cpuCoreCountInput: number;
```

- *Type:* number

---

##### `dataStorageSizeTbInput`<sup>Optional</sup> <a name="dataStorageSizeTbInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTbInput"></a>

```typescript
public readonly dataStorageSizeTbInput: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeGbInput`<sup>Optional</sup> <a name="dbNodeStorageSizeGbInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGbInput"></a>

```typescript
public readonly dbNodeStorageSizeGbInput: number;
```

- *Type:* number

---

##### `dbServerOcidsInput`<sup>Optional</sup> <a name="dbServerOcidsInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcidsInput"></a>

```typescript
public readonly dbServerOcidsInput: string[];
```

- *Type:* string[]

---

##### `diagnosticsDataCollectionOptionsInput`<sup>Optional</sup> <a name="diagnosticsDataCollectionOptionsInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptionsInput"></a>

```typescript
public readonly diagnosticsDataCollectionOptionsInput: OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---

##### `diskRedundancyInput`<sup>Optional</sup> <a name="diskRedundancyInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancyInput"></a>

```typescript
public readonly diskRedundancyInput: string;
```

- *Type:* string

---

##### `giVersionInput`<sup>Optional</sup> <a name="giVersionInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersionInput"></a>

```typescript
public readonly giVersionInput: string;
```

- *Type:* string

---

##### `hostnamePrefixInput`<sup>Optional</sup> <a name="hostnamePrefixInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefixInput"></a>

```typescript
public readonly hostnamePrefixInput: string;
```

- *Type:* string

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseTypeInput"></a>

```typescript
public readonly licenseTypeInput: string;
```

- *Type:* string

---

##### `localBackupEnabledInput`<sup>Optional</sup> <a name="localBackupEnabledInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabledInput"></a>

```typescript
public readonly localBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memorySizeGbInput`<sup>Optional</sup> <a name="memorySizeGbInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGbInput"></a>

```typescript
public readonly memorySizeGbInput: number;
```

- *Type:* number

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `ocpuCountInput`<sup>Optional</sup> <a name="ocpuCountInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCountInput"></a>

```typescript
public readonly ocpuCountInput: number;
```

- *Type:* number

---

##### `sparseDiskgroupEnabledInput`<sup>Optional</sup> <a name="sparseDiskgroupEnabledInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabledInput"></a>

```typescript
public readonly sparseDiskgroupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeysInput"></a>

```typescript
public readonly sshPublicKeysInput: string[];
```

- *Type:* string[]

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: OracleDatabaseCloudVmClusterPropertiesTimeZone;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `dataStorageSizeTb`<sup>Required</sup> <a name="dataStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTb"></a>

```typescript
public readonly dataStorageSizeTb: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeGb`<sup>Required</sup> <a name="dbNodeStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```typescript
public readonly dbNodeStorageSizeGb: number;
```

- *Type:* number

---

##### `dbServerOcids`<sup>Required</sup> <a name="dbServerOcids" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcids"></a>

```typescript
public readonly dbServerOcids: string[];
```

- *Type:* string[]

---

##### `diskRedundancy`<sup>Required</sup> <a name="diskRedundancy" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancy"></a>

```typescript
public readonly diskRedundancy: string;
```

- *Type:* string

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersion"></a>

```typescript
public readonly giVersion: string;
```

- *Type:* string

---

##### `hostnamePrefix`<sup>Required</sup> <a name="hostnamePrefix" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefix"></a>

```typescript
public readonly hostnamePrefix: string;
```

- *Type:* string

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `localBackupEnabled`<sup>Required</sup> <a name="localBackupEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabled"></a>

```typescript
public readonly localBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memorySizeGb`<sup>Required</sup> <a name="memorySizeGb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGb"></a>

```typescript
public readonly memorySizeGb: number;
```

- *Type:* number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCount"></a>

```typescript
public readonly ocpuCount: number;
```

- *Type:* number

---

##### `sparseDiskgroupEnabled`<sup>Required</sup> <a name="sparseDiskgroupEnabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabled"></a>

```typescript
public readonly sparseDiskgroupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseCloudVmClusterProperties;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a>

---


### OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference <a name="OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

new oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseCloudVmClusterPropertiesTimeZone;
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---


### OracleDatabaseCloudVmClusterTimeoutsOutputReference <a name="OracleDatabaseCloudVmClusterTimeoutsOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseCloudVmCluster } from '@cdktf/provider-google'

new oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleDatabaseCloudVmClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a>

---



