# `google_firestore_database`

Refer to the Terraform Registory for docs: [`google_firestore_database`](https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database).

# `firestoreDatabase` Submodule <a name="`firestoreDatabase` Submodule" id="@cdktf/provider-google.firestoreDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirestoreDatabase <a name="FirestoreDatabase" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database google_firestore_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer"></a>

```typescript
import { firestoreDatabase } from '@cdktf/provider-google'

new firestoreDatabase.FirestoreDatabase(scope: Construct, id: string, config: FirestoreDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig">FirestoreDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig">FirestoreDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetAppEngineIntegrationMode">resetAppEngineIntegrationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetConcurrencyMode">resetConcurrencyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetDeleteProtectionState">resetDeleteProtectionState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetPointInTimeRecoveryEnablement">resetPointInTimeRecoveryEnablement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.putTimeouts"></a>

```typescript
public putTimeouts(value: FirestoreDatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a>

---

##### `resetAppEngineIntegrationMode` <a name="resetAppEngineIntegrationMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetAppEngineIntegrationMode"></a>

```typescript
public resetAppEngineIntegrationMode(): void
```

##### `resetConcurrencyMode` <a name="resetConcurrencyMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetConcurrencyMode"></a>

```typescript
public resetConcurrencyMode(): void
```

##### `resetDeleteProtectionState` <a name="resetDeleteProtectionState" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetDeleteProtectionState"></a>

```typescript
public resetDeleteProtectionState(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPointInTimeRecoveryEnablement` <a name="resetPointInTimeRecoveryEnablement" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetPointInTimeRecoveryEnablement"></a>

```typescript
public resetPointInTimeRecoveryEnablement(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FirestoreDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isConstruct"></a>

```typescript
import { firestoreDatabase } from '@cdktf/provider-google'

firestoreDatabase.FirestoreDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformElement"></a>

```typescript
import { firestoreDatabase } from '@cdktf/provider-google'

firestoreDatabase.FirestoreDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformResource"></a>

```typescript
import { firestoreDatabase } from '@cdktf/provider-google'

firestoreDatabase.FirestoreDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport"></a>

```typescript
import { firestoreDatabase } from '@cdktf/provider-google'

firestoreDatabase.FirestoreDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FirestoreDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirestoreDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirestoreDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirestoreDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.earliestVersionTime">earliestVersionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference">FirestoreDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.versionRetentionPeriod">versionRetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.appEngineIntegrationModeInput">appEngineIntegrationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.concurrencyModeInput">concurrencyModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deleteProtectionStateInput">deleteProtectionStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.locationIdInput">locationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.pointInTimeRecoveryEnablementInput">pointInTimeRecoveryEnablementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.appEngineIntegrationMode">appEngineIntegrationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.concurrencyMode">concurrencyMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deleteProtectionState">deleteProtectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.locationId">locationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.pointInTimeRecoveryEnablement">pointInTimeRecoveryEnablement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `earliestVersionTime`<sup>Required</sup> <a name="earliestVersionTime" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.earliestVersionTime"></a>

```typescript
public readonly earliestVersionTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.timeouts"></a>

```typescript
public readonly timeouts: FirestoreDatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference">FirestoreDatabaseTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `versionRetentionPeriod`<sup>Required</sup> <a name="versionRetentionPeriod" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.versionRetentionPeriod"></a>

```typescript
public readonly versionRetentionPeriod: string;
```

- *Type:* string

---

##### `appEngineIntegrationModeInput`<sup>Optional</sup> <a name="appEngineIntegrationModeInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.appEngineIntegrationModeInput"></a>

```typescript
public readonly appEngineIntegrationModeInput: string;
```

- *Type:* string

---

##### `concurrencyModeInput`<sup>Optional</sup> <a name="concurrencyModeInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.concurrencyModeInput"></a>

```typescript
public readonly concurrencyModeInput: string;
```

- *Type:* string

---

##### `deleteProtectionStateInput`<sup>Optional</sup> <a name="deleteProtectionStateInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deleteProtectionStateInput"></a>

```typescript
public readonly deleteProtectionStateInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationIdInput`<sup>Optional</sup> <a name="locationIdInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.locationIdInput"></a>

```typescript
public readonly locationIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pointInTimeRecoveryEnablementInput`<sup>Optional</sup> <a name="pointInTimeRecoveryEnablementInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.pointInTimeRecoveryEnablementInput"></a>

```typescript
public readonly pointInTimeRecoveryEnablementInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FirestoreDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `appEngineIntegrationMode`<sup>Required</sup> <a name="appEngineIntegrationMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.appEngineIntegrationMode"></a>

```typescript
public readonly appEngineIntegrationMode: string;
```

- *Type:* string

---

##### `concurrencyMode`<sup>Required</sup> <a name="concurrencyMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.concurrencyMode"></a>

```typescript
public readonly concurrencyMode: string;
```

- *Type:* string

---

##### `deleteProtectionState`<sup>Required</sup> <a name="deleteProtectionState" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.deleteProtectionState"></a>

```typescript
public readonly deleteProtectionState: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationId`<sup>Required</sup> <a name="locationId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.locationId"></a>

```typescript
public readonly locationId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pointInTimeRecoveryEnablement`<sup>Required</sup> <a name="pointInTimeRecoveryEnablement" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.pointInTimeRecoveryEnablement"></a>

```typescript
public readonly pointInTimeRecoveryEnablement: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirestoreDatabaseConfig <a name="FirestoreDatabaseConfig" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.Initializer"></a>

```typescript
import { firestoreDatabase } from '@cdktf/provider-google'

const firestoreDatabaseConfig: firestoreDatabase.FirestoreDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.locationId">locationId</a></code> | <code>string</code> | The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.name">name</a></code> | <code>string</code> | The ID to use for the database, which will become the final component of the database's resource name. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.type">type</a></code> | <code>string</code> | The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"]. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.appEngineIntegrationMode">appEngineIntegrationMode</a></code> | <code>string</code> | The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.concurrencyMode">concurrencyMode</a></code> | <code>string</code> | The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"]. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.deleteProtectionState">deleteProtectionState</a></code> | <code>string</code> | State of delete protection for the database. Possible values: ["DELETE_PROTECTION_STATE_UNSPECIFIED", "DELETE_PROTECTION_ENABLED", "DELETE_PROTECTION_DISABLED"]. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#id FirestoreDatabase#id}. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.pointInTimeRecoveryEnablement">pointInTimeRecoveryEnablement</a></code> | <code>string</code> | Whether to enable the PITR feature on this database. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#project FirestoreDatabase#project}. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `locationId`<sup>Required</sup> <a name="locationId" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.locationId"></a>

```typescript
public readonly locationId: string;
```

- *Type:* string

The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#location_id FirestoreDatabase#location_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID to use for the database, which will become the final component of the database's resource name.

This value should be 4-63
characters. Valid characters are /[a-z][0-9]-/ with first character
a letter and the last a letter or a number. Must not be
UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.
"(default)" database id is also valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#name FirestoreDatabase#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#type FirestoreDatabase#type}

---

##### `appEngineIntegrationMode`<sup>Optional</sup> <a name="appEngineIntegrationMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.appEngineIntegrationMode"></a>

```typescript
public readonly appEngineIntegrationMode: string;
```

- *Type:* string

The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#app_engine_integration_mode FirestoreDatabase#app_engine_integration_mode}

---

##### `concurrencyMode`<sup>Optional</sup> <a name="concurrencyMode" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.concurrencyMode"></a>

```typescript
public readonly concurrencyMode: string;
```

- *Type:* string

The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#concurrency_mode FirestoreDatabase#concurrency_mode}

---

##### `deleteProtectionState`<sup>Optional</sup> <a name="deleteProtectionState" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.deleteProtectionState"></a>

```typescript
public readonly deleteProtectionState: string;
```

- *Type:* string

State of delete protection for the database. Possible values: ["DELETE_PROTECTION_STATE_UNSPECIFIED", "DELETE_PROTECTION_ENABLED", "DELETE_PROTECTION_DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#delete_protection_state FirestoreDatabase#delete_protection_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#id FirestoreDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pointInTimeRecoveryEnablement`<sup>Optional</sup> <a name="pointInTimeRecoveryEnablement" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.pointInTimeRecoveryEnablement"></a>

```typescript
public readonly pointInTimeRecoveryEnablement: string;
```

- *Type:* string

Whether to enable the PITR feature on this database.

If 'POINT_IN_TIME_RECOVERY_ENABLED' is selected, reads are supported on selected versions of the data from within the past 7 days.
versionRetentionPeriod and earliestVersionTime can be used to determine the supported versions. These include reads against any timestamp within the past hour
and reads against 1-minute snapshots beyond 1 hour and within 7 days.
If 'POINT_IN_TIME_RECOVERY_DISABLED' is selected, reads are supported on any version of the data from within the past 1 hour. Default value: "POINT_IN_TIME_RECOVERY_DISABLED" Possible values: ["POINT_IN_TIME_RECOVERY_ENABLED", "POINT_IN_TIME_RECOVERY_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#point_in_time_recovery_enablement FirestoreDatabase#point_in_time_recovery_enablement}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#project FirestoreDatabase#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FirestoreDatabaseTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#timeouts FirestoreDatabase#timeouts}

---

### FirestoreDatabaseTimeouts <a name="FirestoreDatabaseTimeouts" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.Initializer"></a>

```typescript
import { firestoreDatabase } from '@cdktf/provider-google'

const firestoreDatabaseTimeouts: firestoreDatabase.FirestoreDatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#create FirestoreDatabase#create}. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#delete FirestoreDatabase#delete}. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#update FirestoreDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#create FirestoreDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#delete FirestoreDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/firestore_database#update FirestoreDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirestoreDatabaseTimeoutsOutputReference <a name="FirestoreDatabaseTimeoutsOutputReference" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { firestoreDatabase } from '@cdktf/provider-google'

new firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirestoreDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.firestoreDatabase.FirestoreDatabaseTimeouts">FirestoreDatabaseTimeouts</a>

---



