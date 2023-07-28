# `google_apigee_environment`

Refer to the Terraform Registory for docs: [`google_apigee_environment`](https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment).

# `apigeeEnvironment` Submodule <a name="`apigeeEnvironment` Submodule" id="@cdktf/provider-google.apigeeEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironment <a name="ApigeeEnvironment" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment google_apigee_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer"></a>

```typescript
import { apigeeEnvironment } from '@cdktf/provider-google'

new apigeeEnvironment.ApigeeEnvironment(scope: Construct, id: string, config: ApigeeEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig">ApigeeEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig">ApigeeEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putNodeConfig">putNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetApiProxyType">resetApiProxyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetNodeConfig">resetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putNodeConfig` <a name="putNodeConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putNodeConfig"></a>

```typescript
public putNodeConfig(value: ApigeeEnvironmentNodeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putTimeouts"></a>

```typescript
public putTimeouts(value: ApigeeEnvironmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a>

---

##### `resetApiProxyType` <a name="resetApiProxyType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetApiProxyType"></a>

```typescript
public resetApiProxyType(): void
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDeploymentType"></a>

```typescript
public resetDeploymentType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNodeConfig` <a name="resetNodeConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetNodeConfig"></a>

```typescript
public resetNodeConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isConstruct"></a>

```typescript
import { apigeeEnvironment } from '@cdktf/provider-google'

apigeeEnvironment.ApigeeEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformElement"></a>

```typescript
import { apigeeEnvironment } from '@cdktf/provider-google'

apigeeEnvironment.ApigeeEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformResource"></a>

```typescript
import { apigeeEnvironment } from '@cdktf/provider-google'

apigeeEnvironment.ApigeeEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference">ApigeeEnvironmentNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference">ApigeeEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.apiProxyTypeInput">apiProxyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nodeConfigInput">nodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.apiProxyType">apiProxyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: ApigeeEnvironmentNodeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference">ApigeeEnvironmentNodeConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeEnvironmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference">ApigeeEnvironmentTimeoutsOutputReference</a>

---

##### `apiProxyTypeInput`<sup>Optional</sup> <a name="apiProxyTypeInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.apiProxyTypeInput"></a>

```typescript
public readonly apiProxyTypeInput: string;
```

- *Type:* string

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.deploymentTypeInput"></a>

```typescript
public readonly deploymentTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeConfigInput`<sup>Optional</sup> <a name="nodeConfigInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nodeConfigInput"></a>

```typescript
public readonly nodeConfigInput: ApigeeEnvironmentNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a>

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApigeeEnvironmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a>

---

##### `apiProxyType`<sup>Required</sup> <a name="apiProxyType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.apiProxyType"></a>

```typescript
public readonly apiProxyType: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentConfig <a name="ApigeeEnvironmentConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.Initializer"></a>

```typescript
import { apigeeEnvironment } from '@cdktf/provider-google'

const apigeeEnvironmentConfig: apigeeEnvironment.ApigeeEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.name">name</a></code> | <code>string</code> | The resource ID of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.orgId">orgId</a></code> | <code>string</code> | The Apigee Organization associated with the Apigee environment, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.apiProxyType">apiProxyType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.deploymentType">deploymentType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.description">description</a></code> | <code>string</code> | Description of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#id ApigeeEnvironment#id}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource ID of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#name ApigeeEnvironment#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Apigee Organization associated with the Apigee environment, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#org_id ApigeeEnvironment#org_id}

---

##### `apiProxyType`<sup>Optional</sup> <a name="apiProxyType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.apiProxyType"></a>

```typescript
public readonly apiProxyType: string;
```

- *Type:* string

Optional.

API Proxy type supported by the environment. The type can be set when creating
the Environment and cannot be changed. Possible values: ["API_PROXY_TYPE_UNSPECIFIED", "PROGRAMMABLE", "CONFIGURABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#api_proxy_type ApigeeEnvironment#api_proxy_type}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

Optional.

Deployment type supported by the environment. The deployment type can be
set when creating the environment and cannot be changed. When you enable archive
deployment, you will be prevented from performing a subset of actions within the
environment, including:
Managing the deployment of API proxy or shared flow revisions;
Creating, updating, or deleting resource files;
Creating, updating, or deleting target servers. Possible values: ["DEPLOYMENT_TYPE_UNSPECIFIED", "PROXY", "ARCHIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#deployment_type ApigeeEnvironment#deployment_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#description ApigeeEnvironment#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#display_name ApigeeEnvironment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#id ApigeeEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeConfig`<sup>Optional</sup> <a name="nodeConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: ApigeeEnvironmentNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#node_config ApigeeEnvironment#node_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApigeeEnvironmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#timeouts ApigeeEnvironment#timeouts}

---

### ApigeeEnvironmentNodeConfig <a name="ApigeeEnvironmentNodeConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig.Initializer"></a>

```typescript
import { apigeeEnvironment } from '@cdktf/provider-google'

const apigeeEnvironmentNodeConfig: apigeeEnvironment.ApigeeEnvironmentNodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig.property.maxNodeCount">maxNodeCount</a></code> | <code>string</code> | The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig.property.minNodeCount">minNodeCount</a></code> | <code>string</code> | The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. |

---

##### `maxNodeCount`<sup>Optional</sup> <a name="maxNodeCount" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: string;
```

- *Type:* string

The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment.

If not specified, the default is determined by the
recommended maximum number of nodes for that gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#max_node_count ApigeeEnvironment#max_node_count}

---

##### `minNodeCount`<sup>Optional</sup> <a name="minNodeCount" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: string;
```

- *Type:* string

The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment.

If not specified, the default is determined by the
recommended minimum number of nodes for that gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#min_node_count ApigeeEnvironment#min_node_count}

---

### ApigeeEnvironmentTimeouts <a name="ApigeeEnvironmentTimeouts" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.Initializer"></a>

```typescript
import { apigeeEnvironment } from '@cdktf/provider-google'

const apigeeEnvironmentTimeouts: apigeeEnvironment.ApigeeEnvironmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#create ApigeeEnvironment#create}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#delete ApigeeEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#update ApigeeEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#create ApigeeEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#delete ApigeeEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/apigee_environment#update ApigeeEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentNodeConfigOutputReference <a name="ApigeeEnvironmentNodeConfigOutputReference" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.Initializer"></a>

```typescript
import { apigeeEnvironment } from '@cdktf/provider-google'

new apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resetMaxNodeCount">resetMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resetMinNodeCount">resetMinNodeCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxNodeCount` <a name="resetMaxNodeCount" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resetMaxNodeCount"></a>

```typescript
public resetMaxNodeCount(): void
```

##### `resetMinNodeCount` <a name="resetMinNodeCount" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resetMinNodeCount"></a>

```typescript
public resetMinNodeCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.currentAggregateNodeCount">currentAggregateNodeCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentAggregateNodeCount`<sup>Required</sup> <a name="currentAggregateNodeCount" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.currentAggregateNodeCount"></a>

```typescript
public readonly currentAggregateNodeCount: string;
```

- *Type:* string

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCountInput"></a>

```typescript
public readonly maxNodeCountInput: string;
```

- *Type:* string

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.minNodeCountInput"></a>

```typescript
public readonly minNodeCountInput: string;
```

- *Type:* string

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: string;
```

- *Type:* string

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApigeeEnvironmentNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a>

---


### ApigeeEnvironmentTimeoutsOutputReference <a name="ApigeeEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { apigeeEnvironment } from '@cdktf/provider-google'

new apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigeeEnvironmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a>

---



