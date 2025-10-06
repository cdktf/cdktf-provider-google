# `networkSecurityFirewallEndpointAssociation` Submodule <a name="`networkSecurityFirewallEndpointAssociation` Submodule" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityFirewallEndpointAssociation <a name="NetworkSecurityFirewallEndpointAssociation" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association google_network_security_firewall_endpoint_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer"></a>

```typescript
import { networkSecurityFirewallEndpointAssociation } from '@cdktf/provider-google'

new networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation(scope: Construct, id: string, config: NetworkSecurityFirewallEndpointAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig">NetworkSecurityFirewallEndpointAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig">NetworkSecurityFirewallEndpointAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetTlsInspectionPolicy">resetTlsInspectionPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkSecurityFirewallEndpointAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTlsInspectionPolicy` <a name="resetTlsInspectionPolicy" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.resetTlsInspectionPolicy"></a>

```typescript
public resetTlsInspectionPolicy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityFirewallEndpointAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isConstruct"></a>

```typescript
import { networkSecurityFirewallEndpointAssociation } from '@cdktf/provider-google'

networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformElement"></a>

```typescript
import { networkSecurityFirewallEndpointAssociation } from '@cdktf/provider-google'

networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformResource"></a>

```typescript
import { networkSecurityFirewallEndpointAssociation } from '@cdktf/provider-google'

networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport"></a>

```typescript
import { networkSecurityFirewallEndpointAssociation } from '@cdktf/provider-google'

networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkSecurityFirewallEndpointAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityFirewallEndpointAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityFirewallEndpointAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityFirewallEndpointAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference">NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.firewallEndpointInput">firewallEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicyInput">tlsInspectionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.firewallEndpoint">firewallEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicy">tlsInspectionPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference">NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallEndpointInput`<sup>Optional</sup> <a name="firewallEndpointInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.firewallEndpointInput"></a>

```typescript
public readonly firewallEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkSecurityFirewallEndpointAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>

---

##### `tlsInspectionPolicyInput`<sup>Optional</sup> <a name="tlsInspectionPolicyInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicyInput"></a>

```typescript
public readonly tlsInspectionPolicyInput: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallEndpoint`<sup>Required</sup> <a name="firewallEndpoint" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.firewallEndpoint"></a>

```typescript
public readonly firewallEndpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `tlsInspectionPolicy`<sup>Required</sup> <a name="tlsInspectionPolicy" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicy"></a>

```typescript
public readonly tlsInspectionPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityFirewallEndpointAssociationConfig <a name="NetworkSecurityFirewallEndpointAssociationConfig" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.Initializer"></a>

```typescript
import { networkSecurityFirewallEndpointAssociation } from '@cdktf/provider-google'

const networkSecurityFirewallEndpointAssociationConfig: networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.firewallEndpoint">firewallEndpoint</a></code> | <code>string</code> | The URL of the firewall endpoint that is being associated. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.location">location</a></code> | <code>string</code> | The location (zone) of the firewall endpoint association. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.name">name</a></code> | <code>string</code> | The name of the firewall endpoint association resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.network">network</a></code> | <code>string</code> | The URL of the network that is being associated. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the association is disabled. True indicates that traffic will not be intercepted. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#id NetworkSecurityFirewallEndpointAssociation#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.parent">parent</a></code> | <code>string</code> | The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.tlsInspectionPolicy">tlsInspectionPolicy</a></code> | <code>string</code> | The URL of the TlsInspectionPolicy that is being associated. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `firewallEndpoint`<sup>Required</sup> <a name="firewallEndpoint" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.firewallEndpoint"></a>

```typescript
public readonly firewallEndpoint: string;
```

- *Type:* string

The URL of the firewall endpoint that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#firewall_endpoint NetworkSecurityFirewallEndpointAssociation#firewall_endpoint}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location (zone) of the firewall endpoint association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#location NetworkSecurityFirewallEndpointAssociation#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the firewall endpoint association resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#name NetworkSecurityFirewallEndpointAssociation#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The URL of the network that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#network NetworkSecurityFirewallEndpointAssociation#network}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the association is disabled. True indicates that traffic will not be intercepted.

~> **Note:** The API will reject the request if this value is set to true when creating the resource,
otherwise on an update the association can be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#disabled NetworkSecurityFirewallEndpointAssociation#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#id NetworkSecurityFirewallEndpointAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#labels NetworkSecurityFirewallEndpointAssociation#labels}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#parent NetworkSecurityFirewallEndpointAssociation#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityFirewallEndpointAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#timeouts NetworkSecurityFirewallEndpointAssociation#timeouts}

---

##### `tlsInspectionPolicy`<sup>Optional</sup> <a name="tlsInspectionPolicy" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationConfig.property.tlsInspectionPolicy"></a>

```typescript
public readonly tlsInspectionPolicy: string;
```

- *Type:* string

The URL of the TlsInspectionPolicy that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#tls_inspection_policy NetworkSecurityFirewallEndpointAssociation#tls_inspection_policy}

---

### NetworkSecurityFirewallEndpointAssociationTimeouts <a name="NetworkSecurityFirewallEndpointAssociationTimeouts" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.Initializer"></a>

```typescript
import { networkSecurityFirewallEndpointAssociation } from '@cdktf/provider-google'

const networkSecurityFirewallEndpointAssociationTimeouts: networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#create NetworkSecurityFirewallEndpointAssociation#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#delete NetworkSecurityFirewallEndpointAssociation#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#update NetworkSecurityFirewallEndpointAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#create NetworkSecurityFirewallEndpointAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#delete NetworkSecurityFirewallEndpointAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_security_firewall_endpoint_association#update NetworkSecurityFirewallEndpointAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference <a name="NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkSecurityFirewallEndpointAssociation } from '@cdktf/provider-google'

new networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecurityFirewallEndpointAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityFirewallEndpointAssociation.NetworkSecurityFirewallEndpointAssociationTimeouts">NetworkSecurityFirewallEndpointAssociationTimeouts</a>

---



