# `networkSecuritySecurityProfile` Submodule <a name="`networkSecuritySecurityProfile` Submodule" id="@cdktf/provider-google.networkSecuritySecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecuritySecurityProfile <a name="NetworkSecuritySecurityProfile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile google_network_security_security_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer"></a>

```typescript
import { networkSecuritySecurityProfile } from '@cdktf/provider-google'

new networkSecuritySecurityProfile.NetworkSecuritySecurityProfile(scope: Construct, id: string, config: NetworkSecuritySecurityProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig">NetworkSecuritySecurityProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig">NetworkSecuritySecurityProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putThreatPreventionProfile">putThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetThreatPreventionProfile">resetThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putThreatPreventionProfile` <a name="putThreatPreventionProfile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putThreatPreventionProfile"></a>

```typescript
public putThreatPreventionProfile(value: NetworkSecuritySecurityProfileThreatPreventionProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putThreatPreventionProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkSecuritySecurityProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetThreatPreventionProfile` <a name="resetThreatPreventionProfile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetThreatPreventionProfile"></a>

```typescript
public resetThreatPreventionProfile(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecuritySecurityProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isConstruct"></a>

```typescript
import { networkSecuritySecurityProfile } from '@cdktf/provider-google'

networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformElement"></a>

```typescript
import { networkSecuritySecurityProfile } from '@cdktf/provider-google'

networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformResource"></a>

```typescript
import { networkSecuritySecurityProfile } from '@cdktf/provider-google'

networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport"></a>

```typescript
import { networkSecuritySecurityProfile } from '@cdktf/provider-google'

networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkSecuritySecurityProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecuritySecurityProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecuritySecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecuritySecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.threatPreventionProfile">threatPreventionProfile</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference">NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference">NetworkSecuritySecurityProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.threatPreventionProfileInput">threatPreventionProfileInput</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `threatPreventionProfile`<sup>Required</sup> <a name="threatPreventionProfile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.threatPreventionProfile"></a>

```typescript
public readonly threatPreventionProfile: NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference">NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecuritySecurityProfileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference">NetworkSecuritySecurityProfileTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `threatPreventionProfileInput`<sup>Optional</sup> <a name="threatPreventionProfileInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.threatPreventionProfileInput"></a>

```typescript
public readonly threatPreventionProfileInput: NetworkSecuritySecurityProfileThreatPreventionProfile;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkSecuritySecurityProfileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecuritySecurityProfileConfig <a name="NetworkSecuritySecurityProfileConfig" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.Initializer"></a>

```typescript
import { networkSecuritySecurityProfile } from '@cdktf/provider-google'

const networkSecuritySecurityProfileConfig: networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.name">name</a></code> | <code>string</code> | The name of the security profile resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.type">type</a></code> | <code>string</code> | The type of security profile. Possible values: ["THREAT_PREVENTION"]. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.description">description</a></code> | <code>string</code> | An optional description of the security profile. The Max length is 512 characters. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#id NetworkSecuritySecurityProfile#id}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.location">location</a></code> | <code>string</code> | The location of the security profile. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.parent">parent</a></code> | <code>string</code> | The name of the parent this security profile belongs to. Format: organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.threatPreventionProfile">threatPreventionProfile</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | threat_prevention_profile block. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the security profile resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#name NetworkSecuritySecurityProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of security profile. Possible values: ["THREAT_PREVENTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#type NetworkSecuritySecurityProfile#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of the security profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#description NetworkSecuritySecurityProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#id NetworkSecuritySecurityProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#labels NetworkSecuritySecurityProfile#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the security profile. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#location NetworkSecuritySecurityProfile#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The name of the parent this security profile belongs to. Format: organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#parent NetworkSecuritySecurityProfile#parent}

---

##### `threatPreventionProfile`<sup>Optional</sup> <a name="threatPreventionProfile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.threatPreventionProfile"></a>

```typescript
public readonly threatPreventionProfile: NetworkSecuritySecurityProfileThreatPreventionProfile;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

threat_prevention_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#threat_prevention_profile NetworkSecuritySecurityProfile#threat_prevention_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecuritySecurityProfileTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#timeouts NetworkSecuritySecurityProfile#timeouts}

---

### NetworkSecuritySecurityProfileThreatPreventionProfile <a name="NetworkSecuritySecurityProfileThreatPreventionProfile" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.Initializer"></a>

```typescript
import { networkSecuritySecurityProfile } from '@cdktf/provider-google'

const networkSecuritySecurityProfileThreatPreventionProfile: networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.severityOverrides">severityOverrides</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]</code> | severity_overrides block. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.threatOverrides">threatOverrides</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]</code> | threat_overrides block. |

---

##### `severityOverrides`<sup>Optional</sup> <a name="severityOverrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.severityOverrides"></a>

```typescript
public readonly severityOverrides: IResolvable | NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]

severity_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#severity_overrides NetworkSecuritySecurityProfile#severity_overrides}

---

##### `threatOverrides`<sup>Optional</sup> <a name="threatOverrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.threatOverrides"></a>

```typescript
public readonly threatOverrides: IResolvable | NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]

threat_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#threat_overrides NetworkSecuritySecurityProfile#threat_overrides}

---

### NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides <a name="NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.Initializer"></a>

```typescript
import { networkSecuritySecurityProfile } from '@cdktf/provider-google'

const networkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides: networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.action">action</a></code> | <code>string</code> | Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.severity">severity</a></code> | <code>string</code> | Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"]. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#action NetworkSecuritySecurityProfile#action}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#severity NetworkSecuritySecurityProfile#severity}

---

### NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides <a name="NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.Initializer"></a>

```typescript
import { networkSecuritySecurityProfile } from '@cdktf/provider-google'

const networkSecuritySecurityProfileThreatPreventionProfileThreatOverrides: networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.action">action</a></code> | <code>string</code> | Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.threatId">threatId</a></code> | <code>string</code> | Vendor-specific ID of a threat to override. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#action NetworkSecuritySecurityProfile#action}

---

##### `threatId`<sup>Required</sup> <a name="threatId" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.threatId"></a>

```typescript
public readonly threatId: string;
```

- *Type:* string

Vendor-specific ID of a threat to override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#threat_id NetworkSecuritySecurityProfile#threat_id}

---

### NetworkSecuritySecurityProfileTimeouts <a name="NetworkSecuritySecurityProfileTimeouts" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.Initializer"></a>

```typescript
import { networkSecuritySecurityProfile } from '@cdktf/provider-google'

const networkSecuritySecurityProfileTimeouts: networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#create NetworkSecuritySecurityProfile#create}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#delete NetworkSecuritySecurityProfile#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#update NetworkSecuritySecurityProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#create NetworkSecuritySecurityProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#delete NetworkSecuritySecurityProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/network_security_security_profile#update NetworkSecuritySecurityProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference <a name="NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer"></a>

```typescript
import { networkSecuritySecurityProfile } from '@cdktf/provider-google'

new networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides">putSeverityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides">putThreatOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetSeverityOverrides">resetSeverityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetThreatOverrides">resetThreatOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSeverityOverrides` <a name="putSeverityOverrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides"></a>

```typescript
public putSeverityOverrides(value: IResolvable | NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]

---

##### `putThreatOverrides` <a name="putThreatOverrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides"></a>

```typescript
public putThreatOverrides(value: IResolvable | NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]

---

##### `resetSeverityOverrides` <a name="resetSeverityOverrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetSeverityOverrides"></a>

```typescript
public resetSeverityOverrides(): void
```

##### `resetThreatOverrides` <a name="resetThreatOverrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetThreatOverrides"></a>

```typescript
public resetThreatOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverrides">severityOverrides</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverrides">threatOverrides</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverridesInput">severityOverridesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverridesInput">threatOverridesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `severityOverrides`<sup>Required</sup> <a name="severityOverrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverrides"></a>

```typescript
public readonly severityOverrides: NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList</a>

---

##### `threatOverrides`<sup>Required</sup> <a name="threatOverrides" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverrides"></a>

```typescript
public readonly threatOverrides: NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList</a>

---

##### `severityOverridesInput`<sup>Optional</sup> <a name="severityOverridesInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverridesInput"></a>

```typescript
public readonly severityOverridesInput: IResolvable | NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]

---

##### `threatOverridesInput`<sup>Optional</sup> <a name="threatOverridesInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverridesInput"></a>

```typescript
public readonly threatOverridesInput: IResolvable | NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecuritySecurityProfileThreatPreventionProfile;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

---


### NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList <a name="NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer"></a>

```typescript
import { networkSecuritySecurityProfile } from '@cdktf/provider-google'

new networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get"></a>

```typescript
public get(index: number): NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>[]

---


### NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference <a name="NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer"></a>

```typescript
import { networkSecuritySecurityProfile } from '@cdktf/provider-google'

new networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severityInput">severityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severityInput"></a>

```typescript
public readonly severityInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides</a>

---


### NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList <a name="NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer"></a>

```typescript
import { networkSecuritySecurityProfile } from '@cdktf/provider-google'

new networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get"></a>

```typescript
public get(index: number): NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>[]

---


### NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference <a name="NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer"></a>

```typescript
import { networkSecuritySecurityProfile } from '@cdktf/provider-google'

new networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatIdInput">threatIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatId">threatId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `threatIdInput`<sup>Optional</sup> <a name="threatIdInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatIdInput"></a>

```typescript
public readonly threatIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `threatId`<sup>Required</sup> <a name="threatId" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatId"></a>

```typescript
public readonly threatId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides</a>

---


### NetworkSecuritySecurityProfileTimeoutsOutputReference <a name="NetworkSecuritySecurityProfileTimeoutsOutputReference" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkSecuritySecurityProfile } from '@cdktf/provider-google'

new networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecuritySecurityProfileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>

---



