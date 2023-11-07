# `google_memcache_instance`

Refer to the Terraform Registory for docs: [`google_memcache_instance`](https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance).

# `memcacheInstance` Submodule <a name="`memcacheInstance` Submodule" id="@cdktf/provider-google.memcacheInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemcacheInstance <a name="MemcacheInstance" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance google_memcache_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

new memcacheInstance.MemcacheInstance(scope: Construct, id: string, config: MemcacheInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig">MemcacheInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig">MemcacheInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMaintenancePolicy">putMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMemcacheParameters">putMemcacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.putNodeConfig">putNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetAuthorizedNetwork">resetAuthorizedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMemcacheParameters">resetMemcacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMemcacheVersion">resetMemcacheVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putMaintenancePolicy` <a name="putMaintenancePolicy" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMaintenancePolicy"></a>

```typescript
public putMaintenancePolicy(value: MemcacheInstanceMaintenancePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a>

---

##### `putMemcacheParameters` <a name="putMemcacheParameters" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMemcacheParameters"></a>

```typescript
public putMemcacheParameters(value: MemcacheInstanceMemcacheParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putMemcacheParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a>

---

##### `putNodeConfig` <a name="putNodeConfig" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putNodeConfig"></a>

```typescript
public putNodeConfig(value: MemcacheInstanceNodeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: MemcacheInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a>

---

##### `resetAuthorizedNetwork` <a name="resetAuthorizedNetwork" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetAuthorizedNetwork"></a>

```typescript
public resetAuthorizedNetwork(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMaintenancePolicy"></a>

```typescript
public resetMaintenancePolicy(): void
```

##### `resetMemcacheParameters` <a name="resetMemcacheParameters" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMemcacheParameters"></a>

```typescript
public resetMemcacheParameters(): void
```

##### `resetMemcacheVersion` <a name="resetMemcacheVersion" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetMemcacheVersion"></a>

```typescript
public resetMemcacheVersion(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.resetZones"></a>

```typescript
public resetZones(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MemcacheInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isConstruct"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

memcacheInstance.MemcacheInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformElement"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

memcacheInstance.MemcacheInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformResource"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

memcacheInstance.MemcacheInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.generateConfigForImport"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

memcacheInstance.MemcacheInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MemcacheInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MemcacheInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MemcacheInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MemcacheInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.discoveryEndpoint">discoveryEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference">MemcacheInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList">MemcacheInstanceMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheFullVersion">memcacheFullVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheNodes">memcacheNodes</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList">MemcacheInstanceMemcacheNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheParameters">memcacheParameters</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference">MemcacheInstanceMemcacheParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference">MemcacheInstanceNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference">MemcacheInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.authorizedNetworkInput">authorizedNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheParametersInput">memcacheParametersInput</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheVersionInput">memcacheVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeConfigInput">nodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.zonesInput">zonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.authorizedNetwork">authorizedNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheVersion">memcacheVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `discoveryEndpoint`<sup>Required</sup> <a name="discoveryEndpoint" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.discoveryEndpoint"></a>

```typescript
public readonly discoveryEndpoint: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: MemcacheInstanceMaintenancePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference">MemcacheInstanceMaintenancePolicyOutputReference</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: MemcacheInstanceMaintenanceScheduleList;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList">MemcacheInstanceMaintenanceScheduleList</a>

---

##### `memcacheFullVersion`<sup>Required</sup> <a name="memcacheFullVersion" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheFullVersion"></a>

```typescript
public readonly memcacheFullVersion: string;
```

- *Type:* string

---

##### `memcacheNodes`<sup>Required</sup> <a name="memcacheNodes" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheNodes"></a>

```typescript
public readonly memcacheNodes: MemcacheInstanceMemcacheNodesList;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList">MemcacheInstanceMemcacheNodesList</a>

---

##### `memcacheParameters`<sup>Required</sup> <a name="memcacheParameters" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheParameters"></a>

```typescript
public readonly memcacheParameters: MemcacheInstanceMemcacheParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference">MemcacheInstanceMemcacheParametersOutputReference</a>

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: MemcacheInstanceNodeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference">MemcacheInstanceNodeConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.timeouts"></a>

```typescript
public readonly timeouts: MemcacheInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference">MemcacheInstanceTimeoutsOutputReference</a>

---

##### `authorizedNetworkInput`<sup>Optional</sup> <a name="authorizedNetworkInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.authorizedNetworkInput"></a>

```typescript
public readonly authorizedNetworkInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.maintenancePolicyInput"></a>

```typescript
public readonly maintenancePolicyInput: MemcacheInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a>

---

##### `memcacheParametersInput`<sup>Optional</sup> <a name="memcacheParametersInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheParametersInput"></a>

```typescript
public readonly memcacheParametersInput: MemcacheInstanceMemcacheParameters;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a>

---

##### `memcacheVersionInput`<sup>Optional</sup> <a name="memcacheVersionInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheVersionInput"></a>

```typescript
public readonly memcacheVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeConfigInput`<sup>Optional</sup> <a name="nodeConfigInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeConfigInput"></a>

```typescript
public readonly nodeConfigInput: MemcacheInstanceNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a>

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MemcacheInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.zonesInput"></a>

```typescript
public readonly zonesInput: string[];
```

- *Type:* string[]

---

##### `authorizedNetwork`<sup>Required</sup> <a name="authorizedNetwork" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.authorizedNetwork"></a>

```typescript
public readonly authorizedNetwork: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `memcacheVersion`<sup>Required</sup> <a name="memcacheVersion" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.memcacheVersion"></a>

```typescript
public readonly memcacheVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.memcacheInstance.MemcacheInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MemcacheInstanceConfig <a name="MemcacheInstanceConfig" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

const memcacheInstanceConfig: memcacheInstance.MemcacheInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.name">name</a></code> | <code>string</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.nodeCount">nodeCount</a></code> | <code>number</code> | Number of nodes in the memcache instance. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.authorizedNetwork">authorizedNetwork</a></code> | <code>string</code> | The full name of the GCE network to connect the instance to.  If not provided, 'default' will be used. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | A user-visible name for the instance. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#id MemcacheInstance#id}. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.memcacheParameters">memcacheParameters</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a></code> | memcache_parameters block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.memcacheVersion">memcacheVersion</a></code> | <code>string</code> | The major version of Memcached software. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#project MemcacheInstance#project}. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.region">region</a></code> | <code>string</code> | The region of the Memcache instance. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.zones">zones</a></code> | <code>string[]</code> | Zones where memcache nodes should be provisioned.  If not provided, all zones will be used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#name MemcacheInstance#name}

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: MemcacheInstanceNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#node_config MemcacheInstance#node_config}

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Number of nodes in the memcache instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#node_count MemcacheInstance#node_count}

---

##### `authorizedNetwork`<sup>Optional</sup> <a name="authorizedNetwork" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.authorizedNetwork"></a>

```typescript
public readonly authorizedNetwork: string;
```

- *Type:* string

The full name of the GCE network to connect the instance to.  If not provided, 'default' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#authorized_network MemcacheInstance#authorized_network}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A user-visible name for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#display_name MemcacheInstance#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#id MemcacheInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#labels MemcacheInstance#labels}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: MemcacheInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#maintenance_policy MemcacheInstance#maintenance_policy}

---

##### `memcacheParameters`<sup>Optional</sup> <a name="memcacheParameters" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.memcacheParameters"></a>

```typescript
public readonly memcacheParameters: MemcacheInstanceMemcacheParameters;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a>

memcache_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#memcache_parameters MemcacheInstance#memcache_parameters}

---

##### `memcacheVersion`<sup>Optional</sup> <a name="memcacheVersion" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.memcacheVersion"></a>

```typescript
public readonly memcacheVersion: string;
```

- *Type:* string

The major version of Memcached software.

If not provided, latest supported version will be used.
Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
determined by our system based on the latest supported minor version. Default value: "MEMCACHE_1_5" Possible values: ["MEMCACHE_1_5"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#memcache_version MemcacheInstance#memcache_version}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#project MemcacheInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the Memcache instance. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#region MemcacheInstance#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MemcacheInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#timeouts MemcacheInstance#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceConfig.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

Zones where memcache nodes should be provisioned.  If not provided, all zones will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#zones MemcacheInstance#zones}

---

### MemcacheInstanceMaintenancePolicy <a name="MemcacheInstanceMaintenancePolicy" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

const memcacheInstanceMaintenancePolicy: memcacheInstance.MemcacheInstanceMaintenancePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]</code> | weekly_maintenance_window block. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy.property.description">description</a></code> | <code>string</code> | Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. |

---

##### `weeklyMaintenanceWindow`<sup>Required</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```typescript
public readonly weeklyMaintenanceWindow: IResolvable | MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#weekly_maintenance_window MemcacheInstance#weekly_maintenance_window}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#description MemcacheInstance#description}

---

### MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow <a name="MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

const memcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow: memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day">day</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.duration">duration</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

Required.

The day of week that maintenance updates occur.
- DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
- MONDAY: Monday
- TUESDAY: Tuesday
- WEDNESDAY: Wednesday
- THURSDAY: Thursday
- FRIDAY: Friday
- SATURDAY: Saturday
- SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#day MemcacheInstance#day}

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Required.

The length of the maintenance window, ranging from 3 hours to 8 hours.
A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#duration MemcacheInstance#duration}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```typescript
public readonly startTime: MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#start_time MemcacheInstance#start_time}

---

### MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

const memcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime: memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>number</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>number</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#hours MemcacheInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#minutes MemcacheInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#nanos MemcacheInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#seconds MemcacheInstance#seconds}

---

### MemcacheInstanceMaintenanceSchedule <a name="MemcacheInstanceMaintenanceSchedule" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceSchedule.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

const memcacheInstanceMaintenanceSchedule: memcacheInstance.MemcacheInstanceMaintenanceSchedule = { ... }
```


### MemcacheInstanceMemcacheNodes <a name="MemcacheInstanceMemcacheNodes" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodes.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

const memcacheInstanceMemcacheNodes: memcacheInstance.MemcacheInstanceMemcacheNodes = { ... }
```


### MemcacheInstanceMemcacheParameters <a name="MemcacheInstanceMemcacheParameters" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

const memcacheInstanceMemcacheParameters: memcacheInstance.MemcacheInstanceMemcacheParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters.property.params">params</a></code> | <code>{[ key: string ]: string}</code> | User-defined set of parameters to use in the memcache process. |

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters.property.params"></a>

```typescript
public readonly params: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined set of parameters to use in the memcache process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#params MemcacheInstance#params}

---

### MemcacheInstanceNodeConfig <a name="MemcacheInstanceNodeConfig" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

const memcacheInstanceNodeConfig: memcacheInstance.MemcacheInstanceNodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig.property.cpuCount">cpuCount</a></code> | <code>number</code> | Number of CPUs per node. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig.property.memorySizeMb">memorySizeMb</a></code> | <code>number</code> | Memory size in Mebibytes for each memcache node. |

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig.property.cpuCount"></a>

```typescript
public readonly cpuCount: number;
```

- *Type:* number

Number of CPUs per node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#cpu_count MemcacheInstance#cpu_count}

---

##### `memorySizeMb`<sup>Required</sup> <a name="memorySizeMb" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig.property.memorySizeMb"></a>

```typescript
public readonly memorySizeMb: number;
```

- *Type:* number

Memory size in Mebibytes for each memcache node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#memory_size_mb MemcacheInstance#memory_size_mb}

---

### MemcacheInstanceTimeouts <a name="MemcacheInstanceTimeouts" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

const memcacheInstanceTimeouts: memcacheInstance.MemcacheInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#create MemcacheInstance#create}. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#delete MemcacheInstance#delete}. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#update MemcacheInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#create MemcacheInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#delete MemcacheInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/memcache_instance#update MemcacheInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MemcacheInstanceMaintenancePolicyOutputReference <a name="MemcacheInstanceMaintenancePolicyOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

new memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow">putWeeklyMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeeklyMaintenanceWindow` <a name="putWeeklyMaintenanceWindow" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```typescript
public putWeeklyMaintenanceWindow(value: IResolvable | MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">weeklyMaintenanceWindowInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `weeklyMaintenanceWindow`<sup>Required</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```typescript
public readonly weeklyMaintenanceWindow: MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `weeklyMaintenanceWindowInput`<sup>Optional</sup> <a name="weeklyMaintenanceWindowInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```typescript
public readonly weeklyMaintenanceWindowInput: IResolvable | MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MemcacheInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicy">MemcacheInstanceMaintenancePolicy</a>

---


### MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList <a name="MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

new memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```typescript
public get(index: number): MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

---


### MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

new memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```typescript
public readonly startTime: MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>

---


### MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

new memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">MemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### MemcacheInstanceMaintenanceScheduleList <a name="MemcacheInstanceMaintenanceScheduleList" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

new memcacheInstance.MemcacheInstanceMaintenanceScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.get"></a>

```typescript
public get(index: number): MemcacheInstanceMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MemcacheInstanceMaintenanceScheduleOutputReference <a name="MemcacheInstanceMaintenanceScheduleOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

new memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">scheduleDeadlineTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceSchedule">MemcacheInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `scheduleDeadlineTime`<sup>Required</sup> <a name="scheduleDeadlineTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```typescript
public readonly scheduleDeadlineTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MemcacheInstanceMaintenanceSchedule;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMaintenanceSchedule">MemcacheInstanceMaintenanceSchedule</a>

---


### MemcacheInstanceMemcacheNodesList <a name="MemcacheInstanceMemcacheNodesList" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

new memcacheInstance.MemcacheInstanceMemcacheNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.get"></a>

```typescript
public get(index: number): MemcacheInstanceMemcacheNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MemcacheInstanceMemcacheNodesOutputReference <a name="MemcacheInstanceMemcacheNodesOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

new memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.nodeId">nodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodes">MemcacheInstanceMemcacheNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MemcacheInstanceMemcacheNodes;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheNodes">MemcacheInstanceMemcacheNodes</a>

---


### MemcacheInstanceMemcacheParametersOutputReference <a name="MemcacheInstanceMemcacheParametersOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

new memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.resetParams">resetParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParams` <a name="resetParams" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.resetParams"></a>

```typescript
public resetParams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.paramsInput">paramsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.params">params</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.paramsInput"></a>

```typescript
public readonly paramsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.params"></a>

```typescript
public readonly params: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MemcacheInstanceMemcacheParameters;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceMemcacheParameters">MemcacheInstanceMemcacheParameters</a>

---


### MemcacheInstanceNodeConfigOutputReference <a name="MemcacheInstanceNodeConfigOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

new memcacheInstance.MemcacheInstanceNodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.cpuCountInput">cpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.memorySizeMbInput">memorySizeMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.cpuCount">cpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.memorySizeMb">memorySizeMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuCountInput`<sup>Optional</sup> <a name="cpuCountInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.cpuCountInput"></a>

```typescript
public readonly cpuCountInput: number;
```

- *Type:* number

---

##### `memorySizeMbInput`<sup>Optional</sup> <a name="memorySizeMbInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.memorySizeMbInput"></a>

```typescript
public readonly memorySizeMbInput: number;
```

- *Type:* number

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.cpuCount"></a>

```typescript
public readonly cpuCount: number;
```

- *Type:* number

---

##### `memorySizeMb`<sup>Required</sup> <a name="memorySizeMb" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.memorySizeMb"></a>

```typescript
public readonly memorySizeMb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MemcacheInstanceNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceNodeConfig">MemcacheInstanceNodeConfig</a>

---


### MemcacheInstanceTimeoutsOutputReference <a name="MemcacheInstanceTimeoutsOutputReference" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { memcacheInstance } from '@cdktf/provider-google'

new memcacheInstance.MemcacheInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MemcacheInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.memcacheInstance.MemcacheInstanceTimeouts">MemcacheInstanceTimeouts</a>

---



